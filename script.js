const accordian = (element) => {

    if (element.classList.contains('faq-open')) {
        element.classList.remove('faq-open');

        const icon = element.querySelector('.faq-icon i');
        icon.classList.remove('fa-minus');
        icon.classList.add('fa-plus');

    } else {

        document.querySelectorAll('.faq-item').forEach(item => {
            item.classList.remove('faq-open');

            const icon = item.querySelector('.faq-icon i');
            icon.classList.remove('fa-minus');
            icon.classList.add('fa-plus');

        });
        element.classList.add('faq-open');

        const icon = element.querySelector('.faq-icon i');
        icon.classList.remove('fa-plus');
        icon.classList.add('fa-minus');
    }
};