document.addEventListener('DOMContentLoaded', function() {
    const adjectives = [
    "web developer", 
    "student", 
    "web designer", 
    "programmer"];
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
