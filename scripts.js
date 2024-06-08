// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form validation
const form = document.querySelector('.contact-form');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    
    const firstName = document.getElementById('firstname').value.trim();
    const surname = document.getElementById('surname').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();

    if (firstName === '' || surname === '' || phone === '' || message === '') {
        alert('Please fill in all fields.');
    } else {
        // Here you can add code to submit the form data via AJAX or any other method
        // For example: sendFormData(firstName, surname, phone, message);
        alert('Form submitted successfully!');
        form.reset();
    }
});

// Function to redirect to WhatsApp with predefined message
function redirectToWhatsApp(action) {
    let message = '';
    switch (action) {
        case 'buy1':
            message = 'I want to buy CBT Exam Creator.';
            break;
        case 'apply1':
            message = 'I want to apply for CBT Exam Creator.';
            break;
        case 'buy2':
            message = 'I want to buy CBT Practice.';
            break;
        case 'apply2':
            message = 'I want to apply for CBT Practice.';
            break;
        case 'buy3':
            message = 'I want to buy JAMB Exam.';
            break;
        case 'apply3':
            message = 'I want to apply for JAMB Exam.';
            break;
        case 'buy4':
            message = 'I want to buy Admission Exam.';
            break;
        case 'apply4':
            message = 'I want to apply for Admission Exam.';
            break;
        default:
            message = 'Hello, I need assistance.';
            break;
    }

    const phoneNumber = '1234567890'; // Replace with your WhatsApp number
    window.location.href = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
}



document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    
    const formData = new FormData(this);
    const responseDiv = document.getElementById('response');

    fetch('send_mail.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        if (data === 'success') {
            responseDiv.style.display = 'block';
            this.reset();
        } else {
            alert('There was an error sending your message. Please try again later.');
        }
    })
    .catch(error => {
        alert('There was an error sending your message. Please try again later.');
    });
});

function scrollToDownloads() {
    document.getElementById('downloads').scrollIntoView({ behavior: 'smooth' });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


    

