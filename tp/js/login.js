document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('.form');
  if (form) {
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      window.location.href = '../html/dashboard.html';
    });
  }
});
