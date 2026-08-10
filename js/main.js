document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('is-open');
        });
    }

    // Set current year in footer
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Date Picker: Disallow past dates
    const datePicker = document.getElementById('prefDate');
    if (datePicker) {
        const today = new Date().toISOString().split('T')[0];
        datePicker.setAttribute('min', today);
    }

    // WhatsApp Booking Form Submission
    const bookingForm = document.getElementById('whatsappBookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('custName').value.trim();
            const phone = document.getElementById('custPhone').value.trim();
            const service = document.getElementById('serviceSelect').value;
            const date = document.getElementById('prefDate').value;
            const time = document.getElementById('prefTime').value;
            const message = document.getElementById('custMessage').value.trim();
            
            const phoneRegex = /^[0-9]{10}$/;
            if (!phoneRegex.test(phone)) {
                alert("Please enter a valid 10-digit Indian phone number.");
                return;
            }

            let waText = `*New Appointment Request*\n\n`;
            waText += `*Name:* ${name}\n`;
            waText += `*Phone:* ${phone}\n`;
            waText += `*Service:* ${service}\n`;
            waText += `*Date:* ${date}\n`;
            waText += `*Time:* ${time}\n`;
            
            if (message) {
                waText += `*Message:* ${message}\n`;
            }

            const encodedText = encodeURIComponent(waText);
            const waUrl = `https://wa.me/919876543210?text=${encodedText}`;
            
            window.open(waUrl, '_blank');
        });
    }
});
