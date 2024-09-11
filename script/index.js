document.addEventListener('DOMContentLoaded', function() {
    const adjectives = [
    "web developer ", 
    "designer ",
    "programmer ",
    "front-end tutor",
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
            paragraph.textContent = "Hey there, I'm Pauline! I'm a 20-year-old Software Engineering student with a passion for front-end development. I'm currently working on my degree and have been sharpening my skills in building intuitive and engaging user interfaces. I enjoy turning tricky problems into clean, beautiful, and user-friendly designs. In my free time I also teach a front end web development course for beginners.";
        } else if (activeLink.textContent === 'My skills') {
            header.textContent = 'My skills';
            paragraph.textContent = "Along with multiple language tools like HTML, CSS, JavaScript and git. I also am familiar with a bunch of different frameworks liike React.js, node.js, typescript and tailwind. along with some designing tools like figma, and adobe Illustrator";
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
