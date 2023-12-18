document.addEventListener('DOMContentLoaded', function () {
  var signupForm = document.getElementById('signupForm');
  var emailInput = document.getElementById('emailInput');
  var errorText = document.getElementById('errorText');
  var mainImg = document.querySelector('.main-img');

  signupForm.addEventListener('submit', function (event) {
    event.preventDefault();

    var email = emailInput.value;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      showFillEmailMessage();
      console.log('Veuillez remplir le champ email');
    } else if (!emailRegex.test(email)) {
      showInvalidEmailMessage();
      console.log('Email invalide');
    } else {
      resetStyles();
      document.querySelector('.card1').style.display = 'none';
      document.querySelector('.card2').style.display = 'block';
    }
  });

  emailInput.addEventListener('input', function () {
    removeError();
    resetStyles();
  });

  // Fonction pour afficher le message "Veuillez remplir le champ email"
  function showFillEmailMessage() {
    emailInput.setCustomValidity(''); // Ajout de cette ligne pour supprimer le message par défaut
    emailInput.style.border = '2px solid #ff0000';
    emailInput.style.backgroundColor = '#ffe6e6';
    errorText.textContent = 'Please fill in the email field';
    errorText.style.color = '#ff0000';
  }

  // Fonction pour afficher le message "Email invalide"
  function showInvalidEmailMessage() {
    emailInput.setCustomValidity(''); // Ajout de cette ligne pour supprimer le message par défaut
    emailInput.style.border = '2px solid #ff0000';
    emailInput.style.backgroundColor = '#ffe6e6';
    errorText.textContent = 'Valid email required';
    errorText.style.color = '#ff0000';
  }

  // Fonction pour réinitialiser les styles du champ email
  function resetStyles() {
    emailInput.style.border = '1px solid #ccc';
    emailInput.style.backgroundColor = '#fff';
    errorText.textContent = '';
  }

  // Remplacement de l'image pour mobile si la largeur de l'écran est inférieure ou égale à 750px
  window.addEventListener('resize', function () {
    if (window.innerWidth <= 750) {
      mainImg.src = 'https://raw.githubusercontent.com/Lea225/newsletter-sign-up-with-success-message-main/3412902e7a45230ef6f44b0ef9fd4cba473d577a/assets/images/illustration-sign-up-mobile.svg';
    } else {
      mainImg.src = 'https://raw.githubusercontent.com/Lea225/newsletter-sign-up-with-success-message-main/3412902e7a45230ef6f44b0ef9fd4cba473d577a/assets/images/illustration-sign-up-desktop.svg';
    }
  });

  // Appeler la fonction de remplacement d'image au chargement de la page
  window.dispatchEvent(new Event('resize'));
});
