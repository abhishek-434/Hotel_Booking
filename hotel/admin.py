from django.contrib import admin
from .models import Booking

@admin.register(Booking)
class BookingAdmin(admin.ModelAdmin):
    list_display = ('booking_id', 'guest_name', 'guest_email', 'room_type', 'check_in', 'check_out', 'created_at')
    search_fields = ('booking_id', 'guest_name', 'guest_email')
    list_filter = ('room_type', 'check_in', 'check_out')
    readonly_fields = ('booking_id', 'created_at')
