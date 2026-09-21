# 🏨 The Grand Crimson — Luxury Hotel Booking System

An elegant, full-stack Django web application designed for luxury hospitality management and guest reservations. Featuring a refined crimson-and-gold aesthetic, dynamic multi-guest room booking, automated HTML confirmation emails via SMTP, and user authentication.

---

## 🌟 Key Features

- **Luxury Booking Experience**: Intuitive, high-end guest interface featuring room showcases, dynamic pricing calculation, amenities overview, and custom guest requirements.
- **Dynamic Multi-Guest Management**: Interactive form allowing guests to specify room counts, guest count, and add names of accompanying guests dynamically.
- **Automated Email Confirmations**: Generates and dispatches responsive HTML booking receipts with unique booking identifiers (`GC-<timestamp>`) and reservation details via SMTP.
- **User Authentication**: Complete user authentication system with secure sign-up, login with redirect handling, and logout.
- **Interactive REST/AJAX Booking API**: Dedicated `/api/book/` endpoint accepting JSON payloads with CSRF protection and instant client feedback.
- **Django Admin Dashboard**: Built-in administration panel for reviewing reservations, guest details, and managing site users.
- **Environment Variable Security**: Uses `python-dotenv` to safeguard sensitive SMTP credentials and secrets outside version control.

---

## 🛠️ Tech Stack

- **Backend**: Python 3.11+, [Django](https://www.djangoproject.com/) (v5.x / v4.2+)
- **Database**: SQLite3 (default, zero-configuration)
- **Frontend**: Semantic HTML5, Custom Vanilla CSS (Glassmorphism, Responsive Grid), Modern JavaScript (ES6+ Fetch API)
- **Email Delivery**: Django SMTP Backend (`django.core.mail.EmailMultiAlternatives`)
- **Environment Management**: `python-dotenv`

---

## 📁 Project Structure

```text
Hotel_booking/
│
├── hotel/                         # Core Django application
│   ├── migrations/                # Database migrations
│   ├── static/                    # Static assets (CSS, JS, images)
│   ├── templates/hotel/           # HTML templates
│   │   ├── email_confirmation.html# Branded reservation email template
│   │   ├── index.html             # Main hotel landing & booking page
│   │   ├── login.html             # User login portal
│   │   └── signup.html            # User registration portal
│   ├── admin.py                   # Model registration for admin panel
│   ├── models.py                  # Booking data model
│   ├── urls.py                    # App routing
│   └── views.py                   # Business logic, auth, and API handlers
│
├── hotel_booking_project/         # Project configuration
│   ├── asgi.py
│   ├── settings.py                # Global settings and SMTP configuration
│   ├── urls.py                    # Main URL dispatcher
│   └── wsgi.py
│
├── venv/                          # Python virtual environment (git-ignored)
├── .env                           # Local environment variables (SMTP credentials)
├── .env.example                   # Template for environment configuration
├── .gitignore                     # Git exclusion rules
├── db.sqlite3                     # SQLite database file
├── manage.py                      # Django CLI management script
├── requirements.txt               # Python package dependencies
├── test_booking.py                # Automated booking flow verification script
└── README.md                      # Project documentation
```

---

## 🚀 Getting Started

Follow these steps to set up and run the application locally.

### 1. Prerequisites

Ensure you have Python 3.10 or higher installed:
```bash
python --version
```

---

### 2. Set Up Virtual Environment (`venv`)

A virtual environment isolates project dependencies from your global Python environment.

#### On Windows:
```powershell
# Create virtual environment named 'venv' (if not already created)
python -m venv venv

# Activate the virtual environment
# In PowerShell:
.\venv\Scripts\Activate.ps1

# Or in Command Prompt (cmd.exe):
.\venv\Scripts\activate.bat
```

> **Note for Windows PowerShell users:** If you encounter a script execution policy error, run:
> ```powershell
> Set-ExecutionPolicy -Scope Process -ExecutionPolicy RemoteSigned
> ```

#### On macOS / Linux:
```bash
# Create virtual environment
python3 -m venv venv

# Activate virtual environment
source venv/bin/activate
```

When active, your terminal prompt will display `(venv)`.

---

### 3. Install Dependencies

Install all required Python packages into your virtual environment:

```bash
pip install -r requirements.txt
```

---

### 4. Configure Environment Variables (`.env`)

Copy `.env.example` to create your local `.env` file if you don't already have one:

```bash
# Windows PowerShell
Copy-Item .env.example .env

# macOS / Linux
cp .env.example .env
```

Open `.env` and fill in your SMTP credentials for email delivery:

```ini
# SMTP Configuration (e.g. Gmail)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USE_TLS=True
EMAIL_HOST_USER=your_email@gmail.com
EMAIL_HOST_PASSWORD=your_16_character_app_password
DEFAULT_FROM_EMAIL=your_email@gmail.com
```

> **Tip for Gmail:** `EMAIL_HOST_PASSWORD` requires a 16-character **Google App Password** generated under *Google Account Security > 2-Step Verification > App passwords*, rather than your standard email password.

---

### 5. Apply Database Migrations

Run database migrations to initialize tables for users and bookings:

```bash
python manage.py migrate
```

---

### 6. Create an Administrator Superuser (Optional)

To access the Django Admin dashboard and manage reservations:

```bash
python manage.py createsuperuser
```
Follow the prompts to specify a username, email, and password.

---

### 7. Run the Development Server

Start Django's built-in local server:

```bash
python manage.py runserver
```

Open your browser and navigate to:
- **Main Website**: [http://127.0.0.1:8000/](http://127.0.0.1:8000/)
- **Sign In**: [http://127.0.0.1:8000/login/](http://127.0.0.1:8000/login/)
- **Sign Up**: [http://127.0.0.1:8000/signup/](http://127.0.0.1:8000/signup/)
- **Admin Dashboard**: [http://127.0.0.1:8000/admin/](http://127.0.0.1:8000/admin/)

---

## 🧪 Testing the Booking API

An automated test script is provided in [test_booking.py](file:///d:/Hotel_booking/test_booking.py) to verify the login and room reservation pipeline:

1. Ensure the development server is running in one terminal window (`python manage.py runserver`).
2. Run the test script in another terminal window with your virtual environment active:
   ```bash
   python test_booking.py
   ```

---

## 📡 API Specification

### Endpoint: `POST /api/book/`

Requires an authenticated user session and CSRF token header (`X-CSRFToken`).

#### Request Payload:
```json
{
  "guestName": "Alexander Wright",
  "guestEmail": "alexander@example.com",
  "guestPhone": "+1 (555) 019-2834",
  "roomType": "presidential",
  "checkIn": "2026-10-15",
  "checkOut": "2026-10-20",
  "numGuests": 2,
  "numRooms": 1,
  "specialRequest": "High floor with city view, late check-in",
  "additionalGuests": [
    {"name": "Eleanor Wright"}
  ]
}
```

#### Success Response (`200 OK`):
```json
{
  "success": true,
  "booking_id": "GC-1726938920",
  "message": "Booking confirmed and email sent."
}
```

#### Error Response (`401 Unauthorized`):
```json
{
  "success": false,
  "message": "Authentication required."
}
```

---

## 🛡️ Best Practices & Security

- **Never commit `.env`**: Credentials and API keys must remain strictly local.
- **Keep `venv` excluded**: Virtual environments are stored locally and omitted from git via `.gitignore`.
- **Production settings**: Remember to set `DEBUG = False` and define `ALLOWED_HOSTS` before deploying to production environments.

---

## 📄 License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
