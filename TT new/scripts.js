function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email === "nivethitha.ec22@bitsathy.ac.in" && password === "nive") {
        window.location.href = "admin.html";
    } else if (email === "deva@bitsathy.ac.in" && password === "deva") {
        window.location.href = "stud.html";
    } else if(email === "nive@bitsathy.ac.in" && password === "nive"){
        window.location.href = "fac.html";
    }
    else {
        alert("Invalid credentials. Please try again.");
    }
}
function updateSemesterOptions() {
    const year = document.getElementById("year").value;
    const semester = document.getElementById("semester");

    semester.innerHTML = ""; // Clear existing options

    if (year === "1") {
        semester.innerHTML += "<option value='1'>1</option>";
        semester.innerHTML += "<option value='2'>2</option>";
    } else if (year === "2") {
        semester.innerHTML += "<option value='3'>3</option>";
        semester.innerHTML += "<option value='4'>4</option>";
    } else if (year === "3") {
        semester.innerHTML += "<option value='5'>5</option>";
        semester.innerHTML += "<option value='6'>6</option>";
    } else if (year === "4") {
        semester.innerHTML += "<option value='7'>7</option>";
        semester.innerHTML += "<option value='8'>8</option>";
    }
}
