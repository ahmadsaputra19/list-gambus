//To-top
const toTopBtn = document.querySelector('.move-top');

window.addEventListener('scroll', function() {
    if (window.scrollY > 100) { // Ubah nilai 100 sesuai dengan posisi scroll yang diinginkan
        toTopBtn.classList.add('show');
    } else {
        toTopBtn.classList.remove('show');
    }
});

toTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

//Hubungi Kami
document.getElementById('whatsapp-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let name = document.getElementById('name').value;
    let daerah = document.getElementById('daerah').value;
    let message = document.getElementById('message').value;

    let whatsappNumber = '6289603170126';
    let whatsappMessage = `Assalamu'alaikum, nama saya ${name}.\nAsal saya Dari: ${daerah}.\nPesan saya: ${message}`;

    let whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    
    window.open(whatsappURL, '_blank');
});
