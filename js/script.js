function toggleDetails(button) {
    var description = button.nextElementSibling;
    description.style.display = (description.style.display === 'block' || 
    description.style.display === '') ? 'none' : 'block';
}
console.log("btn cliqué ");