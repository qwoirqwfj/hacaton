document.addEventListener('DOMContentLoaded', function() {
    const amountButtons = document.querySelectorAll('.amount-btn');
    const customAmount = document.querySelector('.custom-amount');

    amountButtons.forEach(button => {
        button.addEventListener('click', function() {
            customAmount.value = this.getAttribute('data-amount');
        });
    });
});