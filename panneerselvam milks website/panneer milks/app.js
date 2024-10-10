<script>
    document.addEventListener('DOMContentLoaded', () => {
        constent form = document.querySelector('form');

        form.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent the form from refreshing the page

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Simple validation (optional)
            if (!name || !email || !message) {
                alert("Please fill in all fields.");
                return;
            }

            // Simulate form submission
            console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
            alert("Thank you for your message! We will get back to you shortly.");

            // Clear the form fields after submission
            form.reset();
        });
    });
</script>
