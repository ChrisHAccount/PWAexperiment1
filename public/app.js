// public/app.js
const saveBtn = document.getElementById('save'); // Save button
const noteInput = document.getElementById('note'); // Note input field
const notesList = document.getElementById('notes'); // Notes list

function loadNotes() { // Load notes from localStorage
  const notes = JSON.parse(localStorage.getItem('notes') || '[]'); // Get notes from localStorage or initialize as empty array
  notesList.innerHTML = notes.map(n => `<li>${n}</li>`).join(''); // Render notes as list items
}

saveBtn.addEventListener('click', () => { // Save button click event
  const notes = JSON.parse(localStorage.getItem('notes') || '[]'); // Get existing notes from localStorage
  notes.push(noteInput.value); // Add new note to the array
  localStorage.setItem('notes', JSON.stringify(notes)); // Save updated notes back to localStorage
  noteInput.value = ''; // Clear the input field
  loadNotes(); // Reload notes to reflect the new addition
});

loadNotes(); // Initial load of notes when the app starts
