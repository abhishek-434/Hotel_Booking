from django.shortcuts import render, redirect
from django.contrib.auth import login, authenticate, logout
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib import messages
from django.http import JsonResponse
from django.core.mail import send_mail, EmailMultiAlternatives
from django.template.loader import render_to_string
from django.conf import settings
from django.views.decorators.csrf import csrf_exempt
from .models import Booking
import json
import time


def home(request):
    return render(request, 'hotel/index.html')

def login_view(request):
    if request.method == 'POST':
        form = AuthenticationForm(request, data=request.POST)
        if form.is_valid():
            username = form.cleaned_data.get('username')
            password = form.cleaned_data.get('password')
            user = authenticate(username=username, password=password)
            if user is not None:
                login(request, user)
                next_url = request.GET.get('next', 'home')
                return redirect(next_url)
        else:
            messages.error(request, "Invalid username or password.")
    else:
        form = AuthenticationForm()
    return render(request, 'hotel/login.html', {'form': form})

def signup_view(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)
            return redirect('home')
        else:
            for error in form.errors.values():
                messages.error(request, error)
    else:
        form = UserCreationForm()
    return render(request, 'hotel/signup.html', {'form': form})

def logout_view(request):
    logout(request)
    return redirect('home')

def api_book_room(request):
    if request.method == 'POST':
        if not request.user.is_authenticated:
            return JsonResponse({'success': False, 'message': 'Authentication required.'}, status=401)
        
        try:
            data = json.loads(request.body)
            guest_name = data.get('guestName')
            guest_email = data.get('guestEmail')
            guest_phone = data.get('guestPhone')
            room_type_id = data.get('roomType')
            check_in = data.get('checkIn')
            check_out = data.get('checkOut')
            num_guests = data.get('numGuests')
            num_rooms = data.get('numRooms')
            special_request = data.get('specialRequest', '')
            additional_guests = data.get('additionalGuests', [])

            # Generate a simple booking ID
            booking_id = f"GC-{int(time.time())}"

            # Create the booking
            booking = Booking.objects.create(
                user=request.user,
                guest_name=guest_name,
                guest_email=guest_email,
                guest_phone=guest_phone,
                room_type=room_type_id,
                check_in=check_in,
                check_out=check_out,
                num_guests=num_guests,
                num_rooms=num_rooms,
                special_requests=special_request,
                additional_guests=additional_guests,
                booking_id=booking_id
            )

            # Prepare the email content
            subject = f'Booking Confirmation - {booking_id}'
            guest_list = ", ".join([guest_name] + [g.get('name', '') for g in additional_guests])
            
            message = f"""
Dear {guest_name},

Thank you for choosing The Grand Crimson. Your booking has been confirmed!

Booking Details:
----------------
Booking ID: {booking_id}
Guest(s): {guest_list}
Room Type: {room_type_id.capitalize()}
Rooms: {num_rooms}
Check-in: {check_in}
Check-out: {check_out}
Special Requests: {special_request if special_request else 'None'}

We look forward to welcoming you!

Warm regards,
The Grand Crimson Team
42 Crimson Boulevard, New Delhi
            """

            # HTML Context
            context = {
                'guest_name': guest_name,
                'guest_list': guest_list,
                'booking_id': booking_id,
                'room_type': room_type_id.capitalize(),
                'num_rooms': num_rooms,
                'check_in': check_in,
                'check_out': check_out,
                'special_requests': special_request,
            }

            # Render HTML content
            html_message = render_to_string('hotel/email_confirmation.html', context)

            # Create the email
            email = EmailMultiAlternatives(
                subject,
                message, # Plain text version
                settings.DEFAULT_FROM_EMAIL,
                [guest_email]
            )
            email.attach_alternative(html_message, "text/html")
            
            # Send the email
            try:
                email.send(fail_silently=False)
            except Exception as e:
                print(f"Email sending failed: {e}")

            return JsonResponse({
                'success': True,
                'booking_id': booking_id,
                'message': 'Booking confirmed and email sent.'
            })

        except Exception as e:
            return JsonResponse({'success': False, 'message': str(e)}, status=400)
    
    return JsonResponse({'success': False, 'message': 'Invalid request method.'}, status=405)
