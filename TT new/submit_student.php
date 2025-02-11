<?php
include 'connect.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $department_id = $_POST['department'];
    $semester = $_POST['semester'];

    $sql = "INSERT INTO Students (name, email, department_id, semester) 
            VALUES ('$name', '$email', $department_id, $semester)";

    if ($conn->query($sql) === TRUE) {
        echo "Student added successfully!";
    } else {
        echo "Error: " . $conn->error;
    }
}
?>
