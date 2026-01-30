// Script pour filtrer les tickets selon le menu déroulant

document.addEventListener('DOMContentLoaded', function() {
  const select = document.getElementById('ticket-filter');
  const rows = document.querySelectorAll('tbody tr');

  if (select) {
    select.addEventListener('change', function() {
      const value = select.value;
      rows.forEach(row => {
        if (value === 'all') {
          row.style.display = '';
        } else if (row.classList.contains(value)) {
          row.style.display = '';
        } else {
          row.style.display = 'none';
        }
      });
    });
  }
});
