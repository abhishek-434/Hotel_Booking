import requests
import json

base_url = "http://127.0.0.1:8000"
session = requests.Session()

# Login
login_page = session.get(f"{base_url}/login/")
csrf_token = session.cookies.get('csrftoken')

login_data = {
    'username': 'testuser',
    'password': 'Password@123',
    'csrfmiddlewaretoken': csrf_token
}
r = session.post(f"{base_url}/login/", data=login_data, headers={'Referer': f"{base_url}/login/"})
print(f"Login status: {r.status_code}")

# Booking
booking_data = {
    'guestName': 'Test Guest',
    'guestEmail': 'test@example.com',
    'guestPhone': '1234567890',
    'roomType': 'deluxe',
    'checkIn': '2026-03-30',
    'checkOut': '2026-04-01',
    'numGuests': '2',
    'numRooms': '1',
    'specialRequest': 'Test request',
    'additionalGuests': [{'name': 'Guest 2'}]
}

csrf_token = session.cookies.get('csrftoken')
r = session.post(f"{base_url}/api/book/", 
                 json=booking_data, 
                 headers={'X-CSRFToken': csrf_token, 'Referer': base_url})

print(f"Booking status: {r.status_code}")
print(f"Response: {r.text}")
