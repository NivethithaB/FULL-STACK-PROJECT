// Toggle the visibility of the submenu
document.querySelector('.submenu > a').addEventListener('click', function() {
    const submenuItems = this.nextElementSibling;
    submenuItems.style.display = submenuItems.style.display === 'block' ? 'none' : 'block';
});

function submitForm() {
    alert("Form submitted!");
}
