function ouvrirPlus(id) {
    document.getElementById(id).style.display = "flex";
}

function fermerPlus(id) {
    document.getElementById(id).style.display = "none";
}


window.onclick = function(event) {
    let modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
};

function submitForm(event) {
    event.preventDefault(); 
    document.getElementById("contact-form").submit();
    alert("✅ Merci pour votre message ! Nous vous répondrons bientôt.");
    document.getElementById("contact-form").reset();
}