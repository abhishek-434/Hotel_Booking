


const ROOMS = [
    {
        id: 'standard',
        name: 'Standard Room',
        price: 3999,
        badge: 'Best Value',
        image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=600&h=400&fit=crop',
        amenities: ['King Bed', 'Free WiFi', 'TV', 'Mini Bar'],
        description: 'A comfortable and well-appointed room perfect for solo travellers or couples seeking a relaxing stay with all essential amenities.',
        features: [
            '300 sq ft of living space',
            'Plush king-size bed with premium linens',
            '42-inch Smart LED TV',
            'Complimentary high-speed WiFi',
            'Mini bar with curated selection',
            'In-room safe and work desk',
            'Rainfall shower with premium toiletries',
            'Daily housekeeping'
        ]
    },
    {
        id: 'deluxe',
        name: 'Deluxe Room',
        price: 6999,
        badge: 'Popular',
        image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjByb29tfGVufDB8fDB8fHww',
        amenities: ['King Bed', 'City View', 'WiFi', 'Bathtub', 'Lounge'],
        description: 'Spacious and elegantly designed with stunning city views, ideal for guests who desire extra comfort and style.',
        features: [
            '450 sq ft of luxurious space',
            'King-size bed with Egyptian cotton linens',
            'Private balcony with panoramic city view',
            'Marble bathroom with soaking bathtub',
            '55-inch Smart 4K TV',
            'Nespresso coffee machine',
            'Exclusive lounge access',
            'Complimentary breakfast for two'
        ]
    },
    {
        id: 'premium',
        name: 'Premium Suite',
        price: 11999,
        badge: 'Recommended',
        image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&h=400&fit=crop',
        amenities: ['King Bed', 'Living Room', 'Jacuzzi', 'Butler', 'WiFi'],
        description: 'A luxurious suite featuring a separate living area, premium amenities, and personalized butler service for a refined stay.',
        features: [
            '700 sq ft of premium living space',
            'Separate living room and bedroom',
            'Private Jacuzzi and rainfall shower',
            'Dedicated 24/7 butler service',
            '65-inch OLED TV in both rooms',
            'Premium mini bar (restocked daily)',
            'Walk-in closet',
            'Complimentary spa treatment for two'
        ]
    },
    {
        id: 'luxury',
        name: 'Luxury Suite',
        price: 18999,
        badge: 'Exclusive',
        image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&h=400&fit=crop',
        amenities: ['King Bed', 'Terrace', 'Dining', 'Jacuzzi', 'Butler'],
        description: 'An opulent suite with private terrace, dining area, and bespoke services for an unparalleled luxury experience.',
        features: [
            '1,000 sq ft of opulent space',
            'Private terrace with skyline views',
            'In-suite dining area for 4 guests',
            'Master bathroom with steam shower & Jacuzzi',
            'Bang & Olufsen sound system',
            'Personal chef menu on request',
            'Complimentary airport transfer (luxury sedan)',
            'Full-day spa package included'
        ]
    },
    {
        id: 'presidential',
        name: 'Presidential Suite',
        price: 29999,
        badge: 'Ultimate',
        image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=600&h=400&fit=crop',
        amenities: ['2 King Beds', 'Grand Terrace', 'Kitchen', 'Office', 'Butler'],
        description: 'The crown jewel of The Grand Crimson — an expansive, lavishly appointed suite with grand terrace, private kitchen, and office.',
        features: [
            '1,800 sq ft of grand living space',
            '2 Bedrooms with king-size beds',
            'Grand terrace with 360° panoramic views',
            'Fully equipped private kitchen',
            'Private study/office room',
            'Personal butler & concierge team',
            'Complimentary luxury car service',
            'All-inclusive dining & spa access'
        ]
    },
    {
        id: 'superior',
        name: 'Superior Room',
        price: 4999,
        badge: 'Upgraded',
        image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=600&h=400&fit=crop',
        amenities: ['Queen Bed', 'Garden View', 'WiFi', 'TV', 'Breakfast'],
        description: 'A step above standard with charming garden views and complimentary breakfast — ideal for those who appreciate the finer details.',
        features: [
            '380 sq ft of elegant space',
            'Queen-size bed with luxury mattress',
            'Private garden or courtyard view',
            '50-inch Smart LED TV',
            'Complimentary buffet breakfast',
            'Tea & coffee making station',
            'Bathrobe and slippers provided',
            'Turndown service every evening'
        ]
    },
    {
        id: 'executive',
        name: 'Executive Room',
        price: 8999,
        badge: 'Business',
        image: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?w=600&h=400&fit=crop',
        amenities: ['King Bed', 'Work Desk', 'Lounge', 'WiFi', 'Printer'],
        description: 'Tailored for the modern business traveller with a dedicated workspace, executive lounge access, and high-speed connectivity.',
        features: [
            '500 sq ft of business-ready space',
            'Ergonomic work desk with monitor stand',
            'Executive lounge access with meeting rooms',
            'In-room wireless printer',
            'Dual high-speed internet connections',
            'Complimentary pressing of 2 garments daily',
            'Late checkout until 2 PM',
            'Complimentary breakfast & evening cocktails'
        ]
    },
    {
        id: 'honeymoon',
        name: 'Honeymoon Suite',
        price: 15999,
        badge: 'Romantic',
        image: 'https://images.unsplash.com/photo-1602002418082-a4443e081dd1?w=600&h=400&fit=crop',
        amenities: ['King Bed', 'Balcony', 'Jacuzzi', 'Champagne', 'Spa'],
        description: 'A romantic haven designed for couples, featuring rose petal turndown, champagne on arrival, and couples\'  spa treatments.',
        features: [
            '650 sq ft of romantic ambiance',
            'Four-poster king bed with silk canopy',
            'Private balcony with sunset views',
            'Couples Jacuzzi with aromatherapy',
            'Champagne & chocolate on arrival',
            'Rose petal turndown service',
            'Candlelit dinner arrangement available',
            'Complimentary couples spa session'
        ]
    },
    {
        id: 'penthouse',
        name: 'Royal Penthouse',
        price: 49999,
        badge: 'Ultra Luxury',
        image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&h=400&fit=crop',
        amenities: ['3 Bedrooms', 'Rooftop Pool', 'Cinema', 'Chef', 'Helipad'],
        description: 'The ultimate in grandeur — a sprawling penthouse with private rooftop pool, cinema room, personal chef, and helipad access.',
        features: [
            '3,500 sq ft of unrivalled luxury',
            '3 Bedrooms with en-suite bathrooms',
            'Private rooftop infinity pool & sun deck',
            'In-suite cinema room with 85-inch screen',
            'Personal Michelin-star chef on call',
            'Private helipad access',
            'Rolls-Royce airport transfers',
            'All services included — truly all-inclusive'
        ]
    }
];

const ROOM_PRICES = {
    standard: 3999,
    superior: 4999,
    deluxe: 6999,
    executive: 8999,
    premium: 11999,
    honeymoon: 15999,
    luxury: 18999,
    presidential: 29999,
    penthouse: 49999
};


document.addEventListener('DOMContentLoaded', () => {
    renderRooms(ROOMS);
    initNavbar();
    initBookingForm();
    initContactForm();
    initNewsletterForm();
    initScrollReveal();
    initBackToTop();
    setMinDates();
    initFilters();
    initFAQ();
});




function renderRooms(roomsToRender) {
    const container = document.getElementById('roomsContainer');
    if (!container) return;

    if (roomsToRender.length === 0) {
        container.innerHTML = `
            <div class="col-12 text-center py-5 reveal">
                <i class="bi bi-search fs-1 text-muted mb-3 d-block"></i>
                <h4 class="text-muted">No rooms match your criteria</h4>
                <p class="text-muted">Try adjusting your filters or search terms.</p>
                <button class="btn btn-outline-crimson mt-2" onclick="resetFilters()">Reset All Filters</button>
            </div>
        `;
        return;
    }

    container.innerHTML = roomsToRender.map(room => `
        <div class="col-lg-4 col-md-6 reveal">
            <div class="room-card">
                <div class="room-card-img-wrapper">
                    <img src="${room.image}" alt="${room.name}" loading="lazy">
                    <span class="room-card-badge">${room.badge}</span>
                </div>
                <div class="room-card-body">
                    <h5>${room.name}</h5>
                    <div class="room-card-price">
                        ₹${room.price.toLocaleString('en-IN')} <small>/ night</small>
                    </div>
                    <div class="room-card-amenities">
                        ${room.amenities.map(a => `<span><i class="bi bi-check-circle-fill"></i> ${a}</span>`).join('')}
                    </div>
                    <p class="room-card-desc">${room.description}</p>
                    <div class="room-card-actions">
                        <button class="btn btn-outline-crimson" onclick="openRoomModal('${room.id}')">
                            <i class="bi bi-eye"></i> View Details
                        </button>
                        <a href="#booking" class="btn btn-crimson" onclick="selectRoom('${room.id}')">
                            <i class="bi bi-calendar-check"></i> Book Now
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `).join('');


    setTimeout(initScrollReveal, 100);
}


function initFilters() {
    const searchInput = document.getElementById('filterSearch');
    const priceSelect = document.getElementById('filterPrice');
    const sortSelect = document.getElementById('filterSort');

    const handleFilter = () => {
        const searchTerm = searchInput.value.toLowerCase();
        const maxPrice = priceSelect.value === 'any' ? Infinity : parseInt(priceSelect.value);
        const sortBy = sortSelect.value;

        let filtered = ROOMS.filter(room => {
            const matchesSearch = room.name.toLowerCase().includes(searchTerm) ||
                room.description.toLowerCase().includes(searchTerm) ||
                room.amenities.some(a => a.toLowerCase().includes(searchTerm));
            const matchesPrice = room.price <= maxPrice;
            return matchesSearch && matchesPrice;
        });

        if (sortBy === 'price-low') {
            filtered.sort((a, b) => a.price - b.price);
        } else if (sortBy === 'price-high') {
            filtered.sort((a, b) => b.price - a.price);
        }

        renderRooms(filtered);
    };

    searchInput?.addEventListener('input', handleFilter);
    priceSelect?.addEventListener('change', handleFilter);
    sortSelect?.addEventListener('change', handleFilter);
}

function resetFilters() {
    document.getElementById('filterSearch').value = '';
    document.getElementById('filterPrice').value = 'any';
    document.getElementById('filterSort').value = 'default';
    renderRooms(ROOMS);
}


function openRoomModal(roomId) {
    const room = ROOMS.find(r => r.id === roomId);
    if (!room) return;

    document.getElementById('roomDetailModalLabel').textContent = room.name;
    document.getElementById('modalBody').innerHTML = `
        <img src="${room.image}" alt="${room.name}" class="modal-room-img">
        <div class="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
            <h4 class="mb-0 text-crimson">${room.name}</h4>
            <span class="modal-room-price">₹${room.price.toLocaleString('en-IN')} <small class="text-muted fs-6">/ night</small></span>
        </div>
        <p class="text-muted">${room.description}</p>
        <div class="modal-room-amenities">
            ${room.amenities.map(a => `<span><i class="bi bi-check-circle-fill"></i> ${a}</span>`).join('')}
        </div>
        <h6 class="text-crimson mt-4 mb-3">Room Features</h6>
        <ul class="list-unstyled modal-room-features">
            ${room.features.map(f => `<li><i class="bi bi-check2-circle"></i> ${f}</li>`).join('')}
        </ul>
    `;


    const bookBtn = document.getElementById('modalBookBtn');
    bookBtn.onclick = () => selectRoom(roomId);

    const modal = new bootstrap.Modal(document.getElementById('roomDetailModal'));
    modal.show();
}


function selectRoom(roomId) {
    const roomSelect = document.getElementById('roomType');
    if (roomSelect) {
        roomSelect.value = roomId;
        roomSelect.dispatchEvent(new Event('change'));
    }

    setTimeout(() => {
        document.getElementById('booking').scrollIntoView({ behavior: 'smooth' });
    }, 300);
}


function initNavbar() {
    const navbar = document.getElementById('mainNav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 80) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });


    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            const collapse = document.getElementById('navMenu');
            const bsCollapse = bootstrap.Collapse.getInstance(collapse);
            if (bsCollapse) bsCollapse.hide();
        });
    });


    const sections = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', () => {
        const scrollPos = window.scrollY + 120;
        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');
            const link = document.querySelector(`.nav-link[href="#${id}"]`);
            if (link) {
                if (scrollPos >= top && scrollPos < top + height) {
                    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
                    link.classList.add('active');
                }
            }
        });
    });
}


function setMinDates() {
    const today = new Date().toISOString().split('T')[0];
    const checkIn = document.getElementById('checkIn');
    const checkOut = document.getElementById('checkOut');
    if (checkIn) checkIn.min = today;
    if (checkOut) checkOut.min = today;

    checkIn?.addEventListener('change', () => {
        if (checkIn.value) {
            const nextDay = new Date(checkIn.value);
            nextDay.setDate(nextDay.getDate() + 1);
            checkOut.min = nextDay.toISOString().split('T')[0];
            if (checkOut.value && checkOut.value <= checkIn.value) {
                checkOut.value = '';
            }
        }
        updatePriceSummary();
    });

    checkOut?.addEventListener('change', updatePriceSummary);
    document.getElementById('roomType')?.addEventListener('change', updatePriceSummary);
}


function updatePriceSummary() {
    const roomType = document.getElementById('roomType').value;
    const checkIn = document.getElementById('checkIn').value;
    const checkOut = document.getElementById('checkOut').value;
    const wrapper = document.getElementById('priceSummaryWrapper');

    if (roomType && checkIn && checkOut) {
        const nights = Math.ceil((new Date(checkOut) - new Date(checkIn)) / (1000 * 60 * 60 * 24));
        if (nights > 0) {
            const pricePerNight = ROOM_PRICES[roomType];
            const total = pricePerNight * nights;
            const room = ROOMS.find(r => r.id === roomType);
            document.getElementById('summaryRoom').textContent = `${room.name} — ₹${pricePerNight.toLocaleString('en-IN')}/night`;
            document.getElementById('summaryNights').textContent = `${nights} night${nights > 1 ? 's' : ''}`;
            document.getElementById('summaryTotal').textContent = `₹${total.toLocaleString('en-IN')}`;
            wrapper.style.display = 'block';
            return;
        }
    }
    wrapper.style.display = 'none';
}


function initBookingForm() {
    const form = document.getElementById('bookingForm');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (validateBookingForm()) {
            showBookingConfirmation();
            form.reset();
            document.getElementById('priceSummaryWrapper').style.display = 'none';
            clearValidation();
        }
    });
}

function validateBookingForm() {
    let valid = true;
    clearValidation();

    const name = document.getElementById('guestName');
    const email = document.getElementById('guestEmail');
    const phone = document.getElementById('guestPhone');
    const roomType = document.getElementById('roomType');
    const checkIn = document.getElementById('checkIn');
    const checkOut = document.getElementById('checkOut');
    const numGuests = document.getElementById('numGuests');

    if (!name.value.trim()) {
        showError(name, 'nameError', 'Please enter your full name.');
        valid = false;
    }

    if (!email.value.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        showError(email, 'emailError', 'Please enter a valid email address.');
        valid = false;
    }

    if (!phone.value.trim() || !/^[\d+\-\s()]{7,15}$/.test(phone.value)) {
        showError(phone, 'phoneError', 'Please enter a valid phone number.');
        valid = false;
    }

    if (!roomType.value) {
        showError(roomType, 'roomError', 'Please select a room type.');
        valid = false;
    }

    if (!checkIn.value) {
        showError(checkIn, 'checkinError', 'Please select a check-in date.');
        valid = false;
    }

    if (!checkOut.value) {
        showError(checkOut, 'checkoutError', 'Please select a check-out date.');
        valid = false;
    } else if (checkIn.value && checkOut.value <= checkIn.value) {
        showError(checkOut, 'checkoutError', 'Check-out date must be after check-in date.');
        valid = false;
    }

    if (!numGuests.value) {
        showError(numGuests, 'guestError', 'Please select the number of guests.');
        valid = false;
    }

    return valid;
}

function showError(input, errorId, message) {
    input.classList.add('is-invalid');
    const errorEl = document.getElementById(errorId);
    if (errorEl) {
        errorEl.textContent = message;
        errorEl.style.display = 'block';
    }
}

function clearValidation() {
    document.querySelectorAll('.is-invalid').forEach(el => el.classList.remove('is-invalid'));
    document.querySelectorAll('.invalid-feedback').forEach(el => el.style.display = 'none');
}

function showBookingConfirmation() {
    const name = document.getElementById('guestName').value;
    const roomType = document.getElementById('roomType');
    const roomName = roomType.options[roomType.selectedIndex].text.split('—')[0].trim();
    const checkIn = document.getElementById('checkIn').value;
    const checkOut = document.getElementById('checkOut').value;
    const nights = Math.ceil((new Date(checkOut) - new Date(checkIn)) / (1000 * 60 * 60 * 24));
    const pricePerNight = ROOM_PRICES[roomType.value];
    const total = pricePerNight * nights;

    const details = document.getElementById('confirmationDetails');
    details.innerHTML = `
        <div class="text-start mt-3">
            <p><strong>Guest:</strong> ${name}</p>
            <p><strong>Room:</strong> ${roomName}</p>
            <p><strong>Check-in:</strong> ${formatDate(checkIn)}</p>
            <p><strong>Check-out:</strong> ${formatDate(checkOut)}</p>
            <p><strong>Duration:</strong> ${nights} night${nights > 1 ? 's' : ''}</p>
            <p class="fs-5 fw-bold text-crimson"><strong>Total:</strong> ₹${total.toLocaleString('en-IN')}</p>
        </div>
        <p class="mt-2">Booking ID: <strong>GC-${Date.now().toString().slice(-8)}</strong></p>
    `;

    const modal = new bootstrap.Modal(document.getElementById('bookingConfirmModal'));
    modal.show();
}

function formatDate(dateStr) {
    const options = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateStr).toLocaleDateString('en-IN', options);
}


function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const inputs = form.querySelectorAll('[required]');
        let valid = true;
        inputs.forEach(input => {
            if (!input.value.trim()) {
                input.classList.add('is-invalid');
                valid = false;
            } else {
                input.classList.remove('is-invalid');
            }
        });

        if (valid) {
            alert('Thank you for your message! Our team will get back to you within 24 hours.');
            form.reset();
        }
    });
}


function initNewsletterForm() {
    const form = document.getElementById('newsletterForm');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const emailInput = form.querySelector('input[type="email"]');
        if (emailInput.value.trim()) {
            alert('Thank you for subscribing! You\'ll receive exclusive deals and updates.');
            form.reset();
        }
    });
}


function initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal, .service-card, .section-header');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

    reveals.forEach(el => {
        if (!el.classList.contains('revealed')) {
            el.classList.add('reveal');
            observer.observe(el);
        }
    });
}


function initFAQ() {
    const questions = document.querySelectorAll('.faq-question');
    questions.forEach(q => {
        q.addEventListener('click', () => {
            const answer = q.nextElementSibling;
            const isOpen = q.classList.contains('active');

            questions.forEach(otherQ => {
                if (otherQ !== q) {
                    otherQ.classList.remove('active');
                    otherQ.nextElementSibling.classList.remove('show');
                    otherQ.nextElementSibling.style.maxHeight = null;
                }
            });

            q.classList.toggle('active');
            answer.classList.toggle('show');

            if (isOpen) {
                answer.style.maxHeight = null;
            } else {
                answer.style.maxHeight = answer.scrollHeight + "px";
            }
        });
    });
}


function openLightbox(imgSrc, title) {
    const modal = new bootstrap.Modal(document.getElementById('lightboxModal'));
    const img = document.getElementById('lightboxImg');
    const titleEl = document.getElementById('lightboxTitle');

    img.src = imgSrc;
    titleEl.textContent = title;

    modal.show();
}


function initBackToTop() {
    const btn = document.getElementById('backToTop');
    if (!btn) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    });

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}
