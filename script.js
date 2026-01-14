const themeToggle = document.getElementById('theme-toggle');
        const body = document.body;
        const sunIcon = document.getElementById('sun-icon');
        const moonIcon = document.getElementById('moon-icon');

        // Mobile nav toggle
        const navToggle = document.getElementById('nav-toggle');
        const mobileMenu = document.getElementById('mobile-menu');
        if (navToggle && mobileMenu) {
            navToggle.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
            });

            // Auto-hide mobile menu when viewport is at least md (>=768px)
            const mq = window.matchMedia('(min-width: 768px)');
            function handleMq(e) {
                if (e.matches) mobileMenu.classList.add('hidden');
            }
            handleMq(mq);
            if (mq.addEventListener) mq.addEventListener('change', handleMq);
            else if (mq.addListener) mq.addListener(handleMq);
        }

        themeToggle.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            sunIcon.classList.toggle('hidden');
            moonIcon.classList.toggle('hidden');
        });

        // Typing animation
        const text = "Frontend Developer";
        const animatedText = document.getElementById('animated-text');
        let index = 0;

        function typeWriter() {
            if (index < text.length) {
                animatedText.innerHTML += text.charAt(index);
                index++;
                setTimeout(typeWriter, 100);
            } else {
                setTimeout(() => {
                    animatedText.innerHTML = '';
                    index = 0;
                    typeWriter();
                }, 2000);
            }
        }

        // Start typing animation when page loads
        window.addEventListener('load', typeWriter);
