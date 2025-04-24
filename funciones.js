 // Bloquear clic derecho (menú contextual)
  document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
  });

  // Bloquear selección de texto
  document.addEventListener('selectstart', function(e) {
    e.preventDefault();
  });

  // Bloquear Ctrl+C, Ctrl+U, Ctrl+S, F12
  document.addEventListener('keydown', function(e) {
    if (
      (e.ctrlKey && ['c', 'u', 's'].includes(e.key.toLowerCase())) ||
      e.key === 'F12'
    ) {
      e.preventDefault();
    }
  });
