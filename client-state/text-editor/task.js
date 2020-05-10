let editor = document.getElementById('editor');
try {
  let note = localStorage.getItem('text');
  editor.value = note;
}
catch {
  localStorage.setItem('text', '');
}

editor.addEventListener('change', () => {
  localStorage.setItem('text', editor.value);
});


