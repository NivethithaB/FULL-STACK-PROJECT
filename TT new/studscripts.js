function updateSemesters() {
    const yearSelect = document.getElementById('year');
    const semesterSelect = document.getElementById('semester');
    semesterSelect.innerHTML = '<option value="" disabled selected>Semester</option>'; // Reset semesters

    const selectedYear = yearSelect.value;

    let semesters = [];

    switch (selectedYear) {
        case '1':
            semesters = ['1', '2'];
            break;
        case '2':
            semesters = ['3', '4'];
            break;
        case '3':
            semesters = ['5', '6'];
            break;
        case '4':
            semesters = ['7', '8'];
            break;
    }

    semesters.forEach(semester => {
        const option = document.createElement('option');
        option.value = semester;
        option.textContent = semester;
        semesterSelect.appendChild(option);
    });
}

function submitForm() {
    const year = document.getElementById('year').value;
    const semester = document.getElementById('semester').value;
    const department = document.getElementById('department').value;

    if (year && semester && department) {
        alert(`Year: ${year}\nSemester: ${semester}\nDepartment: ${department}`);
    } else {
        alert('Please fill in all fields.');
    }
}
