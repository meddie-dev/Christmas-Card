document.querySelectorAll('.christmas-card').forEach(card => {
    let spotlight = null;
    let backdrop = null;

    card.addEventListener('click', () => {
        const isOpen = card.classList.toggle('open');

        if (!spotlight) {
            spotlight = document.createElement('div');
            spotlight.classList.add('spotlight');
            document.body.appendChild(spotlight);
        }

        if (!backdrop) {
            backdrop = document.createElement('div');
            backdrop.classList.add('spotlight-backdrop');
            document.body.appendChild(backdrop);
        }

        const cardRect = card.getBoundingClientRect();
        const diameter = isOpen ? Math.max(cardRect.width, cardRect.height) * 1.5 : Math.min(cardRect.width, cardRect.height);
        spotlight.style.width = `${diameter}px`;
        spotlight.style.height = `${diameter}px`;
        spotlight.style.borderRadius = '50%';

        spotlight.style.top = `${cardRect.top + window.scrollY + cardRect.height / 2 - diameter / 2}px`;
        spotlight.style.left = `${cardRect.left + window.scrollX + cardRect.width / 2 - diameter / 2}px`;

        backdrop.style.position = 'absolute';
        backdrop.style.top = '0';
        backdrop.style.left = '0';
        backdrop.style.width = '100vw';
        backdrop.style.height = '100vh';
        backdrop.style.background = 'rgba(0, 0, 0, 0.4)';
        backdrop.style.zIndex = '-1';

        if (isOpen) {
            spotlight.style.opacity = '1';
            backdrop.style.opacity = '1';
            document.getElementById('audio').play();
        } else {
            spotlight.style.opacity = '0';
            backdrop.style.opacity = '0';
            document.getElementById('audio').pause();
        }
    });
});

const snowContainer = document.querySelector('.snow');

function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.textContent = '❄';

    snowflake.style.left = Math.random() * 100 + 'vw';
    snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';
    snowflake.style.fontSize = Math.random() * 10 + 10 + 'px';

    snowContainer.appendChild(snowflake);

    setTimeout(() => {
        snowflake.remove();
    }, 5000);
}

setInterval(createSnowflake, 200);

