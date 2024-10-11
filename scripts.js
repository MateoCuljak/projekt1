// Funkcija za prikazivanje sekcija sa fade-in efektom
function showSection(sectionId) {
    // Sakrij sve sekcije uklanjanjem 'visible' klase
    document.getElementById('home').classList.remove('visible');
    document.getElementById('about').classList.remove('visible');
    document.getElementById('contact').classList.remove('visible');

    // Dodaj 'fade-in' klasu kako bi se sekcija sakrila
    document.getElementById('home').classList.add('fade-in');
    document.getElementById('about').classList.add('fade-in');
    document.getElementById('contact').classList.add('fade-in');

    // Prikaži odabranu sekciju s malom odgodom kako bi animacija funkcionirala
    setTimeout(function() {
        document.getElementById(sectionId).classList.add('visible');
    }, 10); // Mali delay za pravilno pokretanje animacije
}

// Prikaz početne sekcije kada se stranica učita
window.onload = function() {
    showSection('home');
};

// Dodaj događaj za klik na "Kontakt" link
document.getElementById('contactLink').addEventListener('click', function(e) {
    e.preventDefault(); // Sprečava defaultno ponašanje linka
    showSection('contact'); // Prikazuje sekciju "Kontakt"
});

// Validacija kontakt forme
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Validacija forme
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex za provjeru email formata

    if (name && emailPattern.test(email) && message) {
        alert('Forma je uspješno poslana!');
    } else {
        alert('Molimo ispunite sva polja i provjerite ispravnost email adrese.');
    }
});

// Pretraživanje stranice
document.getElementById('search').addEventListener('input', function(event) {
    const searchTerm = event.target.value.toLowerCase();
    const sections = document.querySelectorAll('main > div'); // Pronađi sve sekcije unutar main elementa

    sections.forEach(section => {
        if (section.textContent.toLowerCase().includes(searchTerm)) {
            section.style.display = ''; // Prikazuje sekciju
        } else {
            section.style.display = 'none'; // Sakriva sekciju
        }
    });
});
