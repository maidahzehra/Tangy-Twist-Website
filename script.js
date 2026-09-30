// Function to redirect straight to WhatsApp with pre-filled message
function orderWhatsApp(itemName) {
    // Apne WhatsApp number se isko replace karein (Country code format: 923XXXXXXXXX)
    let phoneNumber = "923172777575"; 
    
    let message = `Hello Tangy Twist! 👋 I want to order: *${itemName}*. Please share the details!`;
    let encodedMessage = encodeURIComponent(message);
    let whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    window.open(whatsappURL, '_blank');
}