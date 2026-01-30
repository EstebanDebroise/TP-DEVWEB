// Script fictif pour gérer la soumission du formulaire de modification de profil

document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('.form');
  if (form) {
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      window.location.href = 'user.html';
    });
  }
});
