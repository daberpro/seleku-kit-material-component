export function setRipple() {
    try {
        const letters = Array.from(document.querySelectorAll('.smc-ripple'));
        letters.forEach((letter) => {
            let timerId;
            letter.addEventListener('mousedown', (e) => {
                clearTimeout(timerId);
                const ripple = letter.querySelector('.ripple');
                const size = letter.offsetWidth;
                const pos = letter.getBoundingClientRect();
                const x = e.pageX - pos.left - size;
                const y = e.pageY - pos.top - size - window.scrollY;
                ripple.style = 'top:' + y + 'px; left:' + x + 'px; width: ' + size * 2 + 'px; height: ' + size * 2 + 'px;';
                ripple.classList?.remove('active');
                ripple.classList?.remove('start');
                setTimeout(() => {
                    ripple.classList?.add('start');
                    setTimeout(() => {
                        ripple.classList?.add('active');
                    });
                });
            });
            letter.addEventListener('mouseup', (e) => {
                const ripple = letter.querySelector('.ripple');
                clearTimeout(timerId);
                timerId = setTimeout(() => {
                    ripple.classList?.remove('active');
                    ripple.classList?.remove('start');
                }, 500);
            });
        });
    } catch (err) { }
}