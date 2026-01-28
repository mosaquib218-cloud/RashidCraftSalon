// Data Management Functions
function showStorageStatus(message, isError = false) {
    const statusEl = document.getElementById('storageStatus');
    statusEl.textContent = message;
    statusEl.style.backgroundColor = isError ? '#f44336' : '#4CAF50';
    statusEl.classList.add('show');
    
    setTimeout(() => {
        statusEl.classList.remove('show');
    }, 3000);
}

function backupData() {
    // Create backup object
    const backup = {
        bookings: bookings,
        members: salonMembers,
        backupDate: new Date().toISOString()
    };
    
    // Convert to JSON
    const backupJson = JSON.stringify(backup, null, 2);
    
    // Create download link
    const blob = new Blob([backupJson], { type: 'application/json' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `rashid-salon-backup-${getTodayDate()}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
    
    showStorageStatus('Data backup created successfully!');
}

function clearAllBookings() {
    if (confirm('Are you sure you want to clear ALL bookings? This action cannot be undone!')) {
        bookings = [];
        saveBookingsToStorage();
        populateAdminBookingsTable();
        populateUserBookingsTable();
        showStorageStatus('All bookings cleared!');
    }
}

function clearAllMembers() {
    if (confirm('Are you sure you want to clear ALL members? This action cannot be undone!')) {
        salonMembers = [];
        saveMembersToStorage();
        populateMembersTable();
        showStorageStatus('All members cleared!');
    }
}

function clearAllData() {
    if (confirm('Are you sure you want to clear ALL data (bookings and members)? This action cannot be undone!')) {
        if (confirm('THIS IS YOUR FINAL WARNING! All data will be permanently deleted!')) {
            bookings = [];
            salonMembers = [];
            localStorage.clear();
            populateAdminBookingsTable();
            populateUserBookingsTable();
            populateMembersTable();
            showStorageStatus('All data cleared!');
        }
    }
}

// Add event listeners for data management buttons
document.getElementById('backupData')?.addEventListener('click', backupData);
document.getElementById('clearBookings')?.addEventListener('click', clearAllBookings);
document.getElementById('clearMembers')?.addEventListener('click', clearAllMembers);
document.getElementById('clearAllData')?.addEventListener('click', clearAllData);