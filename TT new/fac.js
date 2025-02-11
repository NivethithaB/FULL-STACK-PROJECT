function submitForm() {
    const facultyID = document.getElementById('faculty-id').value;
    if(facultyID) {
        alert(`Faculty ID: ${facultyID}`);
        // Additional form submission logic can be added here
    } else {
        alert('Please enter your Faculty ID');
    }
}
