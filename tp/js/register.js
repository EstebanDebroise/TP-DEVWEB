// Script pour gérer la soumission du formulaire de création de compte

document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('.form');
  if (form) {
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      window.location.href = 'dashboard.html';
    });
  }
});
