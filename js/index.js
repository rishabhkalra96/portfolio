AOS.init();

window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    document.getElementById('scrolldown').addEventListener('click', () => {
        console.log('clicked');
        window.scrollBy({ 
            top: 1100, // could be negative value
            left: 0, 
            behavior: 'smooth' 
          });
    });
});

function redirectToPage(redirectLink) {
    console.log('opening new page at ', redirectLink);
    if (redirectLink) {
        window.open(redirectLink, '_blank');
    }
}