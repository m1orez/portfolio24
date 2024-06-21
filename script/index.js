document.addEventListener('DOMContentLoaded', function() {
    const adjectives = [
    "web developer ", 
    "designer ", 
    "programmer ",
    "student ", 
    "20 year old "
];
    const typingEffectElement = document.querySelector('.typing-effect');
    let charIndex = 0;
    let adjectiveIndex = 0;
    let isDeleting = false;
    const typingSpeed = 150;
    const erasingSpeed = 100;
    const delayBetweenWords = 2000;

    function type() {
        const currentAdjective = adjectives[adjectiveIndex];
        if (isDeleting) {
            typingEffectElement.textContent = currentAdjective.substring(0, charIndex - 1);
            charIndex--;
            if (charIndex == 0) {
                isDeleting = false;
                adjectiveIndex++;
                if (adjectiveIndex >= adjectives.length) {
                    adjectiveIndex = 0;
                }
                setTimeout(type, typingSpeed);
            } else {
                setTimeout(type, erasingSpeed);
            }
        } else {
            typingEffectElement.textContent = currentAdjective.substring(0, charIndex + 1);
            charIndex++;
            if (charIndex == currentAdjective.length) {
                isDeleting = true;
                setTimeout(type, delayBetweenWords);
            } else {
                setTimeout(type, typingSpeed);
            }
        }
    }

    type();
});

document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.aboutmeLinks .link');
    const header = document.getElementById('aboutMeHeader');
    const paragraph = document.getElementById('AboutMeParagraph');
    
    function updateContent(activeLink) {
        if (activeLink.textContent === 'About me') {
            header.textContent = 'About me';
            paragraph.textContent = "Hey there, I'm Mio! I'm a 20-year-old Software Engineering student with a passion for front-end development. I'm currently working on my degree and have been sharpening my skills in building intuitive and engaging user interfaces. I enjoy turning tricky problems into clean, beautiful, and user-friendly designs.";
        } else if (activeLink.textContent === 'Experience') {
            header.textContent = 'Experience';
            paragraph.textContent = "I go to school.";
        }
    }
    
    links.forEach(link => {
        link.addEventListener('click', () => {
            links.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            updateContent(link);
        });
    });
    
    updateContent(document.querySelector('.aboutmeLinks .link.active'));
});
