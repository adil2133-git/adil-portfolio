document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    const menuIcon = document.getElementById('menu-icon');
    const navLinks = navbar.querySelectorAll('a');

    // Function to toggle the mobile menu and icon state
    function toggleMenu() {
        // Toggle the 'active' class to control the dropdown height/visibility
        navbar.classList.toggle('active');
        // Toggle the 'open' class to rotate the icon
        menuIcon.classList.toggle('open');
    }

    // Function to close the menu (used when a link is clicked)
    function closeMenu() {
        if (navbar.classList.contains('active')) {
            navbar.classList.remove('active');
            menuIcon.classList.remove('open');
        }
    }

    // Attach click listener to the hamburger icon
    if (menuIcon) {
        menuIcon.addEventListener('click', toggleMenu);
    }
    
    // Attach click listeners to all links in the navbar to close the menu
    navLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });
});



/* -- CONTACT SECTION -- */
function sendMail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value
  };

  const serviceID = "service_akckihn";   // your EmailJS service ID
  const templateID = "template_mwdpdck"; // your EmailJS template ID
  const publicKey = "LaUX8nEIPREnyoS04"; // your EmailJS public key

  // Initialize EmailJS
  emailjs.init(publicKey);

  // Send email
  emailjs.send(serviceID, templateID, params)
  .then(res => {
      alert("✅ Message sent successfully!");
      // Clear form fields after sending
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("subject").value = "";
      document.getElementById("message").value = "";
  })
  .catch(err => {
      console.error("❌ Error:", err);
      alert("Failed to send message. Please try again.");
  });
}
