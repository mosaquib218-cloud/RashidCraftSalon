// DOM Elements
const userBtn = document.getElementById('userBtn');
const adminBtn = document.getElementById('adminBtn');
const adminPanel = document.getElementById('adminPanel');
const adminLoginModal = document.getElementById('adminLoginModal');
const adminLoginForm = document.getElementById('adminLoginForm');
const adminIdInput = document.getElementById('adminId');
const adminPasswordInput = document.getElementById('adminPassword');
const submitLoginBtn = document.getElementById('submitLogin');
const cancelLoginBtn = document.getElementById('cancelLogin');
const closeLoginModal = document.getElementById('closeLoginModal');
const loginError = document.getElementById('loginError');
const logoutAdminBtn = document.getElementById('logoutAdmin');
const addNewMemberBtn = document.getElementById('addNewMember');
const addMemberSection = document.getElementById('addMemberSection');
const addMemberForm = document.getElementById('addMemberForm');
const cancelAddMemberBtn = document.getElementById('cancelAddMember');
const membersTableBody = document.getElementById('membersTableBody');

const bookNowBtn = document.getElementById('bookNowBtn');
const viewServicesBtn = document.getElementById('viewServicesBtn');
const submitBooking = document.getElementById('submitBooking');
const refreshBookings = document.getElementById('refreshBookings');
const exportBookings = document.getElementById('exportBookings');
const bookingsTableBody = document.getElementById('bookingsTableBody');
const successModal = document.getElementById('successModal');
const closeModal = document.getElementById('closeModal');
const modalOkBtn = document.getElementById('modalOkBtn');
const whatsappBtn = document.getElementById('whatsappBtn');
const dateInput = document.getElementById('date');
const bookingForm = document.getElementById('bookingForm');
const serviceSelect = document.getElementById('service');
const priceDisplay = document.getElementById('selectedPrice');
const dateNote = document.getElementById('dateNote');

// Time slot containers
const morningSlots = document.getElementById('morningSlots');
const afternoonSlots = document.getElementById('afternoonSlots');
const eveningSlots = document.getElementById('eveningSlots');

// Payment method elements
const cashPaymentRadio = document.getElementById('cashPayment');
const onlinePaymentRadio = document.getElementById('onlinePayment');
const onlinePaymentDetails = document.getElementById('onlinePaymentDetails');
const cashPaymentDetails = document.getElementById('cashPaymentDetails');
const paymentScreenshotInput = document.getElementById('paymentScreenshot');

// User bookings elements
const userBookingsTableBody = document.getElementById('userBookingsTableBody');
const refreshUserBookingsBtn = document.getElementById('refreshUserBookings');
const userPhoneLookup = document.getElementById('userPhoneLookup');
const lookupBookingsBtn = document.getElementById('lookupBookings');

// Stats elements
const totalBookingsEl = document.getElementById('totalBookings');
const todayBookingsEl = document.getElementById('todayBookings');
const pendingConfirmationsEl = document.getElementById('pendingConfirmations');
const totalRevenueEl = document.getElementById('totalRevenue');

// Modal elements
const modalBookingId = document.getElementById('modalBookingId');
const modalService = document.getElementById('modalService');
const modalAmount = document.getElementById('modalAmount');
const modalPaymentMethod = document.getElementById('modalPaymentMethod');
const modalDateTime = document.getElementById('modalDateTime');
const modalInstructions = document.getElementById('modalInstructions');

// Admin credentials
const ADMIN_CREDENTIALS = {
    id: "RashidCraft",
    password: "Rashid700"
};

// Admin session management
let isAdminLoggedIn = false;

// Admin contact details
const ADMIN_PHONE = "7021400700";
const ADMIN_WHATSAPP = "7021400700";
const UPI_ID = "7021400700@ybl";

// Service prices
const SERVICE_PRICES = {
    "Haircut & Styling": 40,
    "Beard Styling": 30,
    "Hair Coloring": 100,
    "Hair Spa": 200,
    "Head Massage": 80,
    "Facial Kit": 700,
    "Full Body Massage": 400,
    "All Services Package": 1400
};

// Business hours and time slots configuration
const TIME_SLOTS = {
    morning: [
        { time: "9:00", label: "9:00 AM" },
        { time: "9:30", label: "9:30 AM" },
        { time: "10:00", label: "10:00 AM" },
        { time: "10:30", label: "10:30 AM" },
        { time: "11:00", label: "11:00 AM" },
        { time: "11:30", label: "11:30 AM" }
    ],
    afternoon: [
        { time: "12:00", label: "12:00 PM" },
        { time: "12:30", label: "12:30 PM" },
        { time: "2:00", label: "2:00 PM" },
        { time: "2:30", label: "2:30 PM" },
        { time: "3:00", label: "3:00 PM" },
        { time: "3:30", label: "3:30 PM" },
        { time: "4:00", label: "4:00 PM" },
        { time: "4:30", label: "4:30 PM" }
    ],
    evening: [
        { time: "5:00", label: "5:00 PM" },
        { time: "5:30", label: "5:30 PM" },
        { time: "6:00", label: "6:00 PM" },
        { time: "6:30", label: "6:30 PM" },
        { time: "7:00", label: "7:00 PM" },
        { time: "7:30", label: "7:30 PM" },
        { time: "8:00", label: "8:00 PM" },
        { time: "8:30", label: "8:30 PM" },
        { time: "9:00", label: "9:00 PM" },
        { time: "9:30", label: "9:30 PM" }
    ]
};

// Initialize data from localStorage
let bookings = loadBookingsFromStorage();
let salonMembers = loadMembersFromStorage();

// If no data in storage, load sample data
if (bookings.length === 0) {
    bookings = [
        {
            id: 1,
            name: "Rajesh Kumar",
            service: "Haircut & Styling",
            amount: 40,
            date: getFormattedDate(1),
            time: "11:00 AM",
            phone: "9876543210",
            phoneLast4: "3210",
            email: "rajesh@example.com",
            paymentMethod: "cash",
            payment: "Confirmed",
            status: "Confirmed",
            screenshot: "",
            bookingDate: new Date().toISOString()
        },
        {
            id: 2,
            name: "Priya Sharma",
            service: "Hair Coloring",
            amount: 100,
            date: getFormattedDate(2),
            time: "3:00 PM",
            phone: "8765432109",
            phoneLast4: "2109",
            email: "priya@example.com",
            paymentMethod: "online",
            payment: "Pending",
            status: "Pending",
            screenshot: "pending.jpg",
            bookingDate: new Date().toISOString()
        },
        {
            id: 3,
            name: "Amit Patel",
            service: "Beard Styling",
            amount: 30,
            date: getFormattedDate(0),
            time: "5:30 PM",
            phone: "7654321098",
            phoneLast4: "1098",
            email: "amit@example.com",
            paymentMethod: "cash",
            payment: "Confirmed",
            status: "Confirmed",
            screenshot: "",
            bookingDate: new Date().toISOString()
        }
    ];
    saveBookingsToStorage();
}

if (salonMembers.length === 0) {
    salonMembers = [
        {
            id: 1,
            name: "Mohd Rashid",
            phone: "7021400700",
            role: "Owner & Head Stylist",
            salary: "",
            joinDate: "2020-01-01"
        },
        {
            id: 2,
            name: "Rahul Sharma",
            phone: "9876543211",
            role: "Hair Stylist",
            salary: "15000",
            joinDate: "2022-03-15"
        },
        {
            id: 3,
            name: "Sunita Verma",
            phone: "8765432100",
            role: "Massage Therapist",
            salary: "12000",
            joinDate: "2022-06-20"
        }
    ];
    saveMembersToStorage();
}

// LocalStorage Functions
function loadBookingsFromStorage() {
    const storedBookings = localStorage.getItem('rashidSalonBookings');
    return storedBookings ? JSON.parse(storedBookings) : [];
}

function saveBookingsToStorage() {
    localStorage.setItem('rashidSalonBookings', JSON.stringify(bookings));
}

function loadMembersFromStorage() {
    const storedMembers = localStorage.getItem('rashidSalonMembers');
    return storedMembers ? JSON.parse(storedMembers) : [];
}

function saveMembersToStorage() {
    localStorage.setItem('rashidSalonMembers', JSON.stringify(salonMembers));
}

// Helper function to get formatted date
function getFormattedDate(daysFromNow) {
    const date = new Date();
    date.setDate(date.getDate() + daysFromNow);
    return date.toISOString().split('T')[0];
}

// Get today's date in YYYY-MM-DD format
function getTodayDate() {
    return new Date().toISOString().split('T')[0];
}

// Get day of week (0=Sunday, 1=Monday, ..., 6=Saturday)
function getDayOfWeek(dateString) {
    const date = new Date(dateString);
    return date.getDay();
}

// Get last 4 digits of phone number
function getLast4Digits(phone) {
    return phone.slice(-4);
}

// Format date for display
function formatDateForDisplay(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
    });
}

// Set minimum date to today
const today = getTodayDate();
dateInput.min = today;
dateInput.value = today;

// Update date note based on selected date
function updateDateNote() {
    const selectedDate = dateInput.value;
    const dayOfWeek = getDayOfWeek(selectedDate);
    const today = getTodayDate();
    
    if (selectedDate === today) {
        dateNote.textContent = "Today";
        dateNote.style.color = "#4CAF50";
    } else if (dayOfWeek === 5) { // Friday
        dateNote.textContent = "Friday - Salon closed from 12:00 PM to 2:00 PM";
        dateNote.style.color = "#f44336";
    } else {
        dateNote.textContent = "";
    }
}

// Generate time slots in grid format with past times disabled
function generateTimeSlots() {
    // Clear all slots
    morningSlots.innerHTML = '';
    afternoonSlots.innerHTML = '';
    eveningSlots.innerHTML = '';
    
    const selectedDate = dateInput.value;
    const dayOfWeek = getDayOfWeek(selectedDate);
    const isFriday = dayOfWeek === 5;
    const isToday = selectedDate === getTodayDate();
    const now = new Date();
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();
    
    // Generate morning slots
    TIME_SLOTS.morning.forEach(slot => {
        const isPast = isToday && isTimePast(slot.time, currentHour, currentMinute, "AM");
        const isFridayClosed = false; // Morning slots not affected by Friday closure
        const timeSlot = createTimeSlotElement(slot, isFriday, isFridayClosed, isPast);
        morningSlots.appendChild(timeSlot);
    });
    
    // Generate afternoon slots (check for Friday closed time)
    TIME_SLOTS.afternoon.forEach(slot => {
        const isPast = isToday && isTimePast(slot.time, currentHour, currentMinute, "PM");
        const isFridayClosed = isFriday && 
            (slot.time === "12:00" || slot.time === "12:30");
        const timeSlot = createTimeSlotElement(slot, isFriday, isFridayClosed, isPast);
        afternoonSlots.appendChild(timeSlot);
    });
    
    // Generate evening slots
    TIME_SLOTS.evening.forEach(slot => {
        const isPast = isToday && isTimePast(slot.time, currentHour, currentMinute, "PM");
        const isFridayClosed = false; // Evening slots not affected by Friday closure
        const timeSlot = createTimeSlotElement(slot, isFriday, isFridayClosed, isPast);
        eveningSlots.appendChild(timeSlot);
    });
}

// Helper function to check if a time has passed for today
function isTimePast(slotTime, currentHour, currentMinute, period) {
    const [hour, minute] = slotTime.split(':').map(Number);
    
    // Convert slot time to 24-hour format for comparison
    let slotHour24 = hour;
    
    // Adjust for PM times
    if (period === "PM" && hour !== 12) {
        slotHour24 += 12;
    }
    
    // Adjust for AM times (12 AM should be 0)
    if (period === "AM" && hour === 12) {
        slotHour24 = 0;
    }
    
    // Compare hours and minutes
    if (slotHour24 < currentHour) {
        return true;
    } else if (slotHour24 === currentHour && minute < currentMinute) {
        return true;
    }
    
    return false;
}

// Create time slot element
function createTimeSlotElement(slot, isFriday, isFridayClosed, isPast = false) {
    const timeSlot = document.createElement('div');
    timeSlot.className = 'time-slot';
    timeSlot.textContent = slot.label;
    timeSlot.dataset.time = slot.time;
    
    // Check if this is lunch break (1:30 PM - 2:00 PM)
    const hour = parseInt(slot.time.split(':')[0]);
    const minute = parseInt(slot.time.split(':')[1]);
    const isLunchBreak = (hour === 1 && minute === 30) || (hour === 2 && minute === 0);
    
    if (isLunchBreak) {
        timeSlot.className = 'time-slot closed';
        timeSlot.textContent = hour === 1 ? '1:30 PM (Lunch)' : '2:00 PM (Lunch)';
        timeSlot.dataset.time = '';
        return timeSlot;
    }
    
    if (isFridayClosed) {
        timeSlot.className = 'time-slot closed';
        timeSlot.textContent = slot.label + ' (Friday Closed)';
        timeSlot.dataset.time = '';
        return timeSlot;
    }
    
    if (isPast) {
        timeSlot.className = 'time-slot past-time';
        timeSlot.textContent = slot.label + ' (Passed)';
        timeSlot.dataset.time = '';
        return timeSlot;
    }
    
    timeSlot.addEventListener('click', function() {
        // Don't allow selection of closed/unavailable/past slots
        if (this.classList.contains('closed') || 
            this.classList.contains('unavailable') || 
            this.classList.contains('past-time')) {
            return;
        }
        
        // Remove selected class from all time slots
        document.querySelectorAll('.time-slot:not(.closed):not(.unavailable):not(.past-time)').forEach(slot => {
            slot.classList.remove('selected');
        });
        
        // Add selected class to clicked time slot
        this.classList.add('selected');
    });
    
    return timeSlot;
}

// Initialize time slots
generateTimeSlots();
updateDateNote();

// Update service price display
function updatePriceDisplay() {
    const selectedOption = serviceSelect.options[serviceSelect.selectedIndex];
    const price = selectedOption.dataset.price || 0;
    priceDisplay.textContent = `Selected Service Price: ₹${price}`;
    
    if (price > 0) {
        priceDisplay.style.backgroundColor = '#e8f5e9';
        priceDisplay.style.color = '#2e7d32';
    } else {
        priceDisplay.style.backgroundColor = '#f5f5f5';
        priceDisplay.style.color = '#666';
    }
}

// Handle payment method selection
function handlePaymentMethodChange() {
    if (cashPaymentRadio.checked) {
        cashPaymentDetails.classList.add('active');
        onlinePaymentDetails.classList.remove('active');
        paymentScreenshotInput.required = false;
    } else if (onlinePaymentRadio.checked) {
        onlinePaymentDetails.classList.add('active');
        cashPaymentDetails.classList.remove('active');
        paymentScreenshotInput.required = true;
    }
}

// Update admin stats
function updateAdminStats() {
    const today = getTodayDate();
    const todayBookings = bookings.filter(booking => booking.date === today);
    const pendingConfirmations = bookings.filter(booking => booking.status === 'Pending').length;
    
    // Calculate total revenue from confirmed bookings
    const totalRevenue = bookings
        .filter(booking => booking.status === 'Confirmed' || booking.status === 'Completed')
        .reduce((total, booking) => total + booking.amount, 0);
    
    totalBookingsEl.textContent = bookings.length;
    todayBookingsEl.textContent = todayBookings.length;
    pendingConfirmationsEl.textContent = pendingConfirmations;
    totalRevenueEl.textContent = `₹${totalRevenue}`;
}

// Populate admin bookings table
function populateAdminBookingsTable() {
    bookingsTableBody.innerHTML = '';
    
    if (bookings.length === 0) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td colspan="9" style="text-align: center; padding: 30px;">
                No bookings found.
            </td>
        `;
        bookingsTableBody.appendChild(row);
        updateAdminStats();
        return;
    }
    
    // Sort bookings by date (newest first)
    const sortedBookings = [...bookings].sort((a, b) => new Date(b.bookingDate) - new Date(a.bookingDate));
    
    sortedBookings.forEach(booking => {
        const row = document.createElement('tr');
        
        // Create admin action buttons based on status
        let actionButtons = '';
        if (booking.status === 'Pending') {
            actionButtons = `
                <div class="admin-action-buttons">
                    <button class="admin-action-btn confirm" data-id="${booking.id}">Confirm</button>
                    <button class="admin-action-btn cancel" data-id="${booking.id}">Cancel</button>
                </div>
            `;
        } else if (booking.status === 'Confirmed') {
            actionButtons = `
                <div class="admin-action-buttons">
                    <button class="admin-action-btn complete" data-id="${booking.id}">Complete</button>
                    <button class="admin-action-btn cancel" data-id="${booking.id}">Cancel</button>
                </div>
            `;
        } else if (booking.status === 'Completed') {
            actionButtons = '<span class="status-completed">Completed</span>';
        } else if (booking.status === 'Cancelled') {
            actionButtons = '<span class="status-cancelled">Cancelled</span>';
        } else {
            actionButtons = '<span>-</span>';
        }
        
        // Format payment method display
        const paymentMethodDisplay = booking.paymentMethod === 'cash' ? 
            '<i class="fas fa-money-bill-wave" style="color: #4CAF50;"></i> Cash' : 
            '<i class="fas fa-qrcode" style="color: #2196F3;"></i> Online';
        
        row.innerHTML = `
            <td>${booking.id}</td>
            <td>${booking.name}</td>
            <td>${booking.service}</td>
            <td>₹${booking.amount}</td>
            <td>${booking.date} at ${booking.time}</td>
            <td>${booking.phone}</td>
            <td>${paymentMethodDisplay}<br><small>${booking.payment}</small></td>
            <td class="status-${booking.status.toLowerCase()}">${booking.status}</td>
            <td>${actionButtons}</td>
        `;
        
        bookingsTableBody.appendChild(row);
    });
    
    // Add event listeners to admin action buttons
    document.querySelectorAll('.admin-action-btn.confirm').forEach(btn => {
        btn.addEventListener('click', function() {
            const bookingId = parseInt(this.dataset.id);
            confirmBooking(bookingId);
        });
    });
    
    document.querySelectorAll('.admin-action-btn.cancel').forEach(btn => {
        btn.addEventListener('click', function() {
            const bookingId = parseInt(this.dataset.id);
            cancelBooking(bookingId);
        });
    });
    
    document.querySelectorAll('.admin-action-btn.complete').forEach(btn => {
        btn.addEventListener('click', function() {
            const bookingId = parseInt(this.dataset.id);
            completeBooking(bookingId);
        });
    });
    
    updateAdminStats();
}

// Populate user bookings table (view only)
function populateUserBookingsTable() {
    userBookingsTableBody.innerHTML = '';
    
    const userPhone = userPhoneLookup.value.trim();
    
    if (!userPhone) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td colspan="7" style="text-align: center; padding: 30px;">
                Please enter your phone number to view your bookings
            </td>
        `;
        userBookingsTableBody.appendChild(row);
        return;
    }
    
    // Filter bookings by phone number (exact match)
    const userBookings = bookings.filter(booking => booking.phone === userPhone);
    
    if (userBookings.length === 0) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td colspan="7" style="text-align: center; padding: 30px;">
                No bookings found for phone number: ${userPhone}
            </td>
        `;
        userBookingsTableBody.appendChild(row);
        return;
    }
    
    // Sort bookings by date (newest first)
    const sortedBookings = [...userBookings].sort((a, b) => new Date(b.bookingDate) - new Date(a.bookingDate));
    
    sortedBookings.forEach(booking => {
        const row = document.createElement('tr');
        
        // Format payment method display
        const paymentMethodDisplay = booking.paymentMethod === 'cash' ? 
            '<i class="fas fa-money-bill-wave" style="color: #4CAF50;"></i> Cash' : 
            '<i class="fas fa-qrcode" style="color: #2196F3;"></i> Online';
        
        row.innerHTML = `
            <td>#${booking.id}</td>
            <td>${booking.name}</td>
            <td>${booking.service}</td>
            <td>${booking.date} at ${booking.time}</td>
            <td>₹${booking.amount}</td>
            <td>${paymentMethodDisplay}</td>
            <td class="status-${booking.status.toLowerCase()}">${booking.status}</td>
        `;
        
        userBookingsTableBody.appendChild(row);
    });
}

// Populate salon members table
function populateMembersTable() {
    membersTableBody.innerHTML = '';
    
    if (salonMembers.length === 0) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td colspan="7" style="text-align: center; padding: 20px;">
                No members added yet.
            </td>
        `;
        membersTableBody.appendChild(row);
        return;
    }
    
    salonMembers.forEach(member => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${member.id}</td>
            <td>${member.name}</td>
            <td>${member.phone}</td>
            <td>${member.role}</td>
            <td>${member.salary ? '₹' + member.salary : '-'}</td>
            <td>${formatDateForDisplay(member.joinDate)}</td>
            <td>
                <button class="admin-action-btn edit" data-id="${member.id}">Edit</button>
                <button class="admin-action-btn cancel" data-id="${member.id}">Remove</button>
            </td>
        `;
        
        membersTableBody.appendChild(row);
    });
}

// Confirm booking (admin only)
function confirmBooking(bookingId) {
    const booking = bookings.find(b => b.id === bookingId);
    if (booking) {
        booking.status = 'Confirmed';
        booking.payment = 'Confirmed';
        saveBookingsToStorage();
        populateAdminBookingsTable();
        populateUserBookingsTable();
        alert(`Booking #${bookingId} confirmed successfully!`);
    }
}

// Cancel booking (admin only)
function cancelBooking(bookingId) {
    if (confirm('Are you sure you want to cancel this booking?')) {
        const booking = bookings.find(b => b.id === bookingId);
        if (booking) {
            booking.status = 'Cancelled';
            saveBookingsToStorage();
            populateAdminBookingsTable();
            populateUserBookingsTable();
            alert(`Booking #${bookingId} cancelled.`);
        }
    }
}

// Complete booking (admin only)
function completeBooking(bookingId) {
    const booking = bookings.find(b => b.id === bookingId);
    if (booking) {
        booking.status = 'Completed';
        saveBookingsToStorage();
        populateAdminBookingsTable();
        populateUserBookingsTable();
        alert(`Booking #${bookingId} marked as completed.`);
    }
}

// Initialize tables
populateAdminBookingsTable();
populateUserBookingsTable();
populateMembersTable();

// Get selected time slot
function getSelectedTimeSlot() {
    const selectedSlot = document.querySelector('.time-slot.selected');
    if (!selectedSlot) return null;
    
    const timeValue = selectedSlot.dataset.time;
    if (!timeValue) return null;
    
    // Format time for display
    const [hour, minutes] = timeValue.split(':');
    const hourNum = parseInt(hour);
    const period = hourNum >= 12 ? 'PM' : 'AM';
    const displayHour = hourNum > 12 ? hourNum - 12 : (hourNum === 0 ? 12 : hourNum);
    return `${displayHour}:${minutes} ${period}`;
}

// Validate phone number
function validatePhoneNumber(phone) {
    const phoneRegex = /^[6-9]\d{9}$/;
    return phoneRegex.test(phone);
}

// Check if selected time is valid for the date
function isValidTimeForDate(date, timeSlot) {
    if (!date || !timeSlot) return true;
    
    const dayOfWeek = getDayOfWeek(date);
    const [hour, minutes] = timeSlot.split(':').map(Number);
    const timeInHours = hour + (minutes / 60);
    
    // Check for Friday closed time (12:00 PM - 2:00 PM)
    if (dayOfWeek === 5) { // Friday
        if (timeInHours >= 12 && timeInHours < 14) {
            return false;
        }
    }
    
    // Check for lunch break (1:30 PM - 2:00 PM)
    if (timeInHours >= 13.5 && timeInHours < 14) {
        return false;
    }
    
    return true;
}

// Validate form
function validateForm(fullName, phone, service, date, timeSlot, paymentMethod, paymentScreenshot) {
    if (!fullName.trim()) {
        alert("Please enter your full name!");
        return false;
    }
    
    if (!phone.trim()) {
        alert("Please enter your phone number!");
        return false;
    }
    
    if (!validatePhoneNumber(phone)) {
        alert("Please enter a valid 10-digit Indian phone number!");
        return false;
    }
    
    if (!service) {
        alert("Please select a service!");
        return false;
    }
    
    if (!date) {
        alert("Please select a date!");
        return false;
    }
    
    if (!timeSlot) {
        alert("Please select a time slot!");
        return false;
    }
    
    // Check if time is valid for selected date
    const timeValue = document.querySelector('.time-slot.selected')?.dataset.time;
    if (timeValue && !isValidTimeForDate(date, timeValue)) {
        alert("Selected time slot is not available. Please choose another time.");
        return false;
    }
    
    // Validate payment method specific requirements
    if (paymentMethod === 'online' && !paymentScreenshot) {
        alert("Please upload payment screenshot for online payment!");
        return false;
    }
    
    return true;
}

// Generate WhatsApp message
function generateWhatsAppMessage(bookingData) {
    return `*New Booking - Rashid Hair Craft Salon*%0A%0A` +
           `*Booking ID:* ${bookingData.id}%0A` +
           `*Customer:* ${bookingData.name}%0A` +
           `*Phone:* ${bookingData.phone}%0A` +
           `*Service:* ${bookingData.service}%0A` +
           `*Amount:* ₹${bookingData.amount}%0A` +
           `*Payment Method:* ${bookingData.paymentMethod === 'cash' ? 'Cash' : 'Online'}%0A` +
           `*Date:* ${bookingData.date}%0A` +
           `*Time:* ${bookingData.time}%0A` +
           `*Status:* ${bookingData.status}%0A%0A` +
           `_Thank you for booking with Rashid Hair Craft Salon!_`;
}

// Generate modal instructions based on payment method
function generateModalInstructions(paymentMethod) {
    if (paymentMethod === 'cash') {
        return `
            <p><strong>Cash Payment Instructions:</strong></p>
            <p>Please arrive 10 minutes before your appointment time with cash payment.</p>
            <p>Payment is due at the time of service.</p>
            <p><strong>Contact:</strong> 7021-400-700 for any changes</p>
        `;
    } else {
        return `
            <p><strong>Online Payment Instructions:</strong></p>
            <p>Please send payment screenshot to WhatsApp: <strong>7021-400-700</strong></p>
            <p>Your booking will be confirmed once we verify your payment.</p>
            <p><strong>UPI ID:</strong> 7021400700@ybl</p>
        `;
    }
}

// Clear form
function clearForm() {
    bookingForm.reset();
    // Reset time slot selection
    document.querySelectorAll('.time-slot').forEach(slot => {
        slot.classList.remove('selected');
    });
    // Reset date to today
    dateInput.value = today;
    // Reset to cash payment by default
    cashPaymentRadio.checked = true;
    handlePaymentMethodChange();
    updateDateNote();
    updatePriceDisplay();
    generateTimeSlots();
}

// Export bookings to CSV
function exportBookingsToCSV() {
    if (bookings.length === 0) {
        alert('No bookings to export!');
        return;
    }
    
    const csvHeaders = ['ID', 'Name', 'Service', 'Amount', 'Date', 'Time', 'Phone', 'Email', 'Payment Method', 'Payment Status', 'Booking Status', 'Booking Date'];
    const csvRows = bookings.map(booking => [
        booking.id,
        `"${booking.name}"`,
        `"${booking.service}"`,
        booking.amount,
        booking.date,
        booking.time,
        booking.phone,
        `"${booking.email}"`,
        booking.paymentMethod,
        booking.payment,
        booking.status,
        new Date(booking.bookingDate).toLocaleString()
    ]);
    
    const csvContent = [
        csvHeaders.join(','),
        ...csvRows.map(row => row.join(','))
    ].join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `rashid-salon-bookings-${getTodayDate()}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
    
    alert('Bookings exported successfully!');
}

// Admin login functions
function showLoginError(message) {
    loginError.textContent = message;
    loginError.classList.add('active');
}

function hideLoginError() {
    loginError.classList.remove('active');
}

function validateAdminLogin(id, password) {
    return id === ADMIN_CREDENTIALS.id && password === ADMIN_CREDENTIALS.password;
}

function loginAdmin() {
    isAdminLoggedIn = true;
    adminBtn.textContent = "Admin Panel";
    adminPanel.classList.add('active');
    adminLoginModal.classList.remove('active');
    addMemberSection.style.display = 'none';
    populateAdminBookingsTable();
}

function logoutAdmin() {
    isAdminLoggedIn = false;
    adminBtn.textContent = "Admin Login";
    adminPanel.classList.remove('active');
    alert("Logged out successfully!");
}

// Add new member
function addNewMember(event) {
    event.preventDefault();
    
    const memberName = document.getElementById('memberName').value.trim();
    const memberPhone = document.getElementById('memberPhone').value.trim();
    const memberRole = document.getElementById('memberRole').value;
    const memberSalary = document.getElementById('memberSalary').value.trim();
    
    if (!memberName || !memberPhone || !memberRole) {
        alert("Please fill all required fields!");
        return;
    }
    
    if (!validatePhoneNumber(memberPhone)) {
        alert("Please enter a valid 10-digit phone number!");
        return;
    }
    
    const newMember = {
        id: salonMembers.length > 0 ? Math.max(...salonMembers.map(m => m.id)) + 1 : 1,
        name: memberName,
        phone: memberPhone,
        role: memberRole,
        salary: memberSalary,
        joinDate: getTodayDate()
    };
    
    salonMembers.push(newMember);
    saveMembersToStorage();
    populateMembersTable();
    addMemberForm.reset();
    addMemberSection.style.display = 'none';
    
    alert(`Member ${memberName} added successfully!`);
}

// Remove member
function removeMember(memberId) {
    if (confirm('Are you sure you want to remove this member?')) {
        salonMembers = salonMembers.filter(member => member.id !== memberId);
        saveMembersToStorage();
        populateMembersTable();
        alert('Member removed successfully!');
    }
}

// Edit member
function editMember(memberId) {
    const member = salonMembers.find(m => m.id === memberId);
    if (member) {
        document.getElementById('memberName').value = member.name;
        document.getElementById('memberPhone').value = member.phone;
        document.getElementById('memberRole').value = member.role;
        document.getElementById('memberSalary').value = member.salary || '';
        
        // Change form to edit mode
        const submitBtn = addMemberForm.querySelector('button[type="submit"]');
        submitBtn.textContent = 'Update Member';
        submitBtn.innerHTML = '<i class="fas fa-save"></i> Update Member';
        submitBtn.onclick = function(e) {
            e.preventDefault();
            updateMember(memberId);
        };
        
        addMemberSection.style.display = 'block';
    }
}

// Update member
function updateMember(memberId) {
    const memberName = document.getElementById('memberName').value.trim();
    const memberPhone = document.getElementById('memberPhone').value.trim();
    const memberRole = document.getElementById('memberRole').value;
    const memberSalary = document.getElementById('memberSalary').value.trim();
    
    if (!memberName || !memberPhone || !memberRole) {
        alert("Please fill all required fields!");
        return;
    }
    
    if (!validatePhoneNumber(memberPhone)) {
        alert("Please enter a valid 10-digit phone number!");
        return;
    }
    
    const memberIndex = salonMembers.findIndex(m => m.id === memberId);
    if (memberIndex !== -1) {
        salonMembers[memberIndex] = {
            id: memberId,
            name: memberName,
            phone: memberPhone,
            role: memberRole,
            salary: memberSalary,
            joinDate: salonMembers[memberIndex].joinDate
        };
        
        saveMembersToStorage();
        populateMembersTable();
        addMemberForm.reset();
        addMemberSection.style.display = 'none';
        
        // Reset form button
        const submitBtn = addMemberForm.querySelector('button[type="submit"]');
        submitBtn.textContent = 'Add Member';
        submitBtn.innerHTML = '<i class="fas fa-save"></i> Add Member';
        submitBtn.onclick = addNewMember;
        
        alert(`Member ${memberName} updated successfully!`);
    }
}

// Event Listeners
userBtn.addEventListener('click', function() {
    adminPanel.classList.remove('active');
    document.getElementById('booking').scrollIntoView({ behavior: 'smooth' });
});

adminBtn.addEventListener('click', function() {
    if (isAdminLoggedIn) {
        adminPanel.classList.add('active');
        adminPanel.scrollIntoView({ behavior: 'smooth' });
    } else {
        adminLoginModal.classList.add('active');
        hideLoginError();
    }
});

bookNowBtn.addEventListener('click', function() {
    adminPanel.classList.remove('active');
    document.getElementById('booking').scrollIntoView({ behavior: 'smooth' });
});

viewServicesBtn.addEventListener('click', function() {
    adminPanel.classList.remove('active');
    document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
});

refreshBookings.addEventListener('click', function() {
    if (isAdminLoggedIn) {
        populateAdminBookingsTable();
        alert("Bookings refreshed!");
    }
});

exportBookings.addEventListener('click', function() {
    if (isAdminLoggedIn) {
        exportBookingsToCSV();
    }
});

addNewMemberBtn.addEventListener('click', function() {
    if (isAdminLoggedIn) {
        addMemberSection.style.display = addMemberSection.style.display === 'none' ? 'block' : 'none';
        if (addMemberSection.style.display === 'block') {
            addMemberForm.reset();
            // Reset form button
            const submitBtn = addMemberForm.querySelector('button[type="submit"]');
            submitBtn.textContent = 'Add Member';
            submitBtn.innerHTML = '<i class="fas fa-save"></i> Add Member';
            submitBtn.onclick = addNewMember;
        }
    }
});

cancelAddMemberBtn.addEventListener('click', function() {
    addMemberSection.style.display = 'none';
    addMemberForm.reset();
    // Reset form button
    const submitBtn = addMemberForm.querySelector('button[type="submit"]');
    submitBtn.textContent = 'Add Member';
    submitBtn.innerHTML = '<i class="fas fa-save"></i> Add Member';
    submitBtn.onclick = addNewMember;
});

addMemberForm.addEventListener('submit', addNewMember);

refreshUserBookingsBtn.addEventListener('click', function() {
    populateUserBookingsTable();
});

lookupBookingsBtn.addEventListener('click', function() {
    if (!userPhoneLookup.value.trim()) {
        alert("Please enter your phone number to find bookings");
        return;
    }
    populateUserBookingsTable();
});

// Admin login form submission
adminLoginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const id = adminIdInput.value.trim();
    const password = adminPasswordInput.value.trim();
    
    hideLoginError();
    
    if (!id || !password) {
        showLoginError("Please enter both ID and password");
        return;
    }
    
    if (validateAdminLogin(id, password)) {
        loginAdmin();
    } else {
        showLoginError("Invalid ID or password. Please try again.");
        adminPasswordInput.value = '';
        adminPasswordInput.focus();
    }
});

// Cancel login
cancelLoginBtn.addEventListener('click', function() {
    adminLoginModal.classList.remove('active');
    adminIdInput.value = '';
    adminPasswordInput.value = '';
    hideLoginError();
});

closeLoginModal.addEventListener('click', function() {
    adminLoginModal.classList.remove('active');
    adminIdInput.value = '';
    adminPasswordInput.value = '';
    hideLoginError();
});

// Logout admin
logoutAdminBtn.addEventListener('click', function() {
    if (confirm("Are you sure you want to logout?")) {
        logoutAdmin();
    }
});

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    if (event.target === successModal) {
        successModal.classList.remove('active');
    }
    if (event.target === adminLoginModal) {
        adminLoginModal.classList.remove('active');
        adminIdInput.value = '';
        adminPasswordInput.value = '';
        hideLoginError();
    }
});

serviceSelect.addEventListener('change', updatePriceDisplay);

dateInput.addEventListener('change', function() {
    updateDateNote();
    generateTimeSlots();
    // Clear selected time slot when date changes
    document.querySelectorAll('.time-slot').forEach(slot => {
        slot.classList.remove('selected');
    });
});

// Payment method change listeners
cashPaymentRadio.addEventListener('change', handlePaymentMethodChange);
onlinePaymentRadio.addEventListener('change', handlePaymentMethodChange);

// Initialize payment method display
handlePaymentMethodChange();

submitBooking.addEventListener('click', function() {
    // Get form values
    const fullName = document.getElementById('fullName').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const service = serviceSelect.value;
    const date = dateInput.value;
    const timeSlot = getSelectedTimeSlot();
    const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value;
    const paymentScreenshot = paymentMethod === 'online' ? 
        document.getElementById('paymentScreenshot').files[0] : null;
    
    // Get service price
    const amount = SERVICE_PRICES[service] || 0;
    
    // Validate form
    if (!validateForm(fullName, phone, service, date, timeSlot, paymentMethod, paymentScreenshot)) {
        return;
    }
    
    // Get last 4 digits of phone
    const phoneLast4 = getLast4Digits(phone);
    
    // Generate unique ID
    const newId = bookings.length > 0 ? Math.max(...bookings.map(b => b.id)) + 1 : 1;
    
    // Create new booking object
    const newBooking = {
        id: newId,
        name: fullName,
        service: service,
        amount: amount,
        date: date,
        time: timeSlot,
        phone: phone,
        phoneLast4: phoneLast4,
        email: email || 'Not provided',
        paymentMethod: paymentMethod,
        payment: paymentMethod === 'online' ? 'Pending' : 'To be paid at salon',
        status: "Pending",
        screenshot: paymentScreenshot ? paymentScreenshot.name : '',
        bookingDate: new Date().toISOString()
    };
    
    // Add to bookings array (at the beginning)
    bookings.unshift(newBooking);
    
    // Save to localStorage
    saveBookingsToStorage();
    
    // Update both tables
    populateAdminBookingsTable();
    populateUserBookingsTable();
    
    // Update modal content
    modalBookingId.textContent = `#${newBooking.id}`;
    modalService.textContent = newBooking.service;
    modalAmount.textContent = `₹${newBooking.amount}`;
    modalPaymentMethod.textContent = paymentMethod === 'cash' ? 'Cash' : 'Online';
    modalDateTime.textContent = `${newBooking.date} at ${newBooking.time}`;
    
    // Generate modal instructions
    modalInstructions.innerHTML = generateModalInstructions(paymentMethod);
    
    // Generate WhatsApp message
    const whatsappMessage = generateWhatsAppMessage(newBooking);
    
    // Store data for modal buttons
    successModal.dataset.bookingId = newBooking.id;
    whatsappBtn.dataset.message = whatsappMessage;
    
    // Show success modal
    successModal.classList.add('active');
    
    // Log booking details
    console.log("=== Booking Details ===");
    console.log("Booking ID:", newBooking.id);
    console.log("Customer:", newBooking.name);
    console.log("Phone:", newBooking.phone);
    console.log("Service:", newBooking.service);
    console.log("Amount: ₹" + newBooking.amount);
    console.log("Payment Method:", paymentMethod === 'cash' ? 'Cash' : 'Online');
    console.log("Date:", newBooking.date);
    console.log("Time:", newBooking.time);
    console.log("Admin WhatsApp/SMS:", ADMIN_PHONE);
    console.log("UPI ID:", UPI_ID);
    console.log("=======================");
    
    // Clear form
    clearForm();
});

closeModal.addEventListener('click', function() {
    successModal.classList.remove('active');
});

modalOkBtn.addEventListener('click', function() {
    successModal.classList.remove('active');
});

whatsappBtn.addEventListener('click', function() {
    const message = this.dataset.message;
    const whatsappUrl = `https://wa.me/91${ADMIN_WHATSAPP}?text=${message}`;
    window.open(whatsappUrl, '_blank');
});

// Form validation for phone number
const phoneInput = document.getElementById('phone');
phoneInput.addEventListener('input', function() {
    this.value = this.value.replace(/\D/g, '').substring(0, 10);
});

// User phone lookup validation
userPhoneLookup.addEventListener('input', function() {
    this.value = this.value.replace(/\D/g, '').substring(0, 10);
});

// Member phone validation
const memberPhoneInput = document.getElementById('memberPhone');
memberPhoneInput.addEventListener('input', function() {
    this.value = this.value.replace(/\D/g, '').substring(0, 10);
});

// Add event delegation for member actions
membersTableBody.addEventListener('click', function(e) {
    const target = e.target;
    if (target.classList.contains('admin-action-btn')) {
        const memberId = parseInt(target.dataset.id);
        if (target.classList.contains('edit')) {
            editMember(memberId);
        } else if (target.classList.contains('cancel')) {
            removeMember(memberId);
        }
    }
});

// Initialize with user panel visible
window.addEventListener('load', function() {
    adminPanel.classList.remove('active');
    addMemberSection.style.display = 'none';
    updateAdminStats();
    updatePriceDisplay();
    
    // Display admin contact info in console
    console.log("=== Rashid Hair Craft Salon ===");
    console.log("Admin Mobile:", ADMIN_PHONE);
    console.log("Admin WhatsApp:", ADMIN_WHATSAPP);
    console.log("SMS for Booking:", ADMIN_PHONE);
    console.log("UPI ID:", UPI_ID);
    console.log("Friday Closed: 12:00 PM - 2:00 PM");
    console.log("Daily Lunch Break: 1:30 PM - 2:00 PM");
    console.log("Payment Methods: Cash or Online");
    console.log("=== Admin Credentials ===");
    console.log("ID: RashidCraft");
    console.log("Password: Rashid700");
    console.log("=== Local Storage Keys ===");
    console.log("Bookings: rashidSalonBookings");
    console.log("Members: rashidSalonMembers");
    console.log("=========================");
});

// Prevent form submission (we're handling it with JavaScript)
bookingForm.addEventListener('submit', function(e) {
    e.preventDefault();
});