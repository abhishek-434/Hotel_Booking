from django.db import models
from django.contrib.auth.models import User

class Booking(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='bookings')
    guest_name = models.CharField(max_length=255)
    guest_email = models.EmailField()
    guest_phone = models.CharField(max_length=20)
    room_type = models.CharField(max_length=50)
    check_in = models.DateField()
    check_out = models.DateField()
    num_guests = models.IntegerField()
    num_rooms = models.IntegerField()
    special_requests = models.TextField(blank=True, null=True)
    additional_guests = models.JSONField(default=list, blank=True)
    booking_id = models.CharField(max_length=20, unique=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.booking_id} - {self.guest_name}"
