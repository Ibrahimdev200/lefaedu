// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

function redirectToWhatsApp(service) {
    // Define WhatsApp links for each service
    const whatsappLinks = {
        waec: 'YOUR_WAEC_WHATSAPP_LINK',
        neco: 'YOUR_NECO_WHATSAPP_LINK',
        gce: 'YOUR_GCE_WHATSAPP_LINK',
        jamb: 'YOUR_JAMB_WHATSAPP_LINK',
        admission: 'YOUR_ADMISSION_WHATSAPP_LINK'
    };

    // Redirect to the corresponding WhatsApp link based on the service
    window.location.href = whatsappLinks[service];
}

