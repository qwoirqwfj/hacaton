document.querySelectorAll('.slider').forEach(slider => {
    let index = 0;
    const items = slider.querySelectorAll('.slider-item');
    const prevBtn = slider.querySelector('.prev');
    const nextBtn = slider.querySelector('.next');

    function updateSlider() {
        items.forEach((item, i) => {
            item.style.display = i === index ? 'flex' : 'none';
        });
    }

    prevBtn.addEventListener('click', () => {
        index = (index > 0) ? index - 1 : items.length - 1;
        updateSlider();
    });

    nextBtn.addEventListener('click', () => {
        index = (index < items.length - 1) ? index + 1 : 0;
        updateSlider();
    });

    updateSlider();
});