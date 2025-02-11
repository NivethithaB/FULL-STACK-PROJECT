<?php
include 'connect.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Query to check user login
    $sql = "SELECT * FROM Users WHERE email = '$email' AND password = '$password'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $user = $result->fetch_assoc();

        // Redirect based on user role
        if ($user['role'] === 'admin') {
            header('Location: adstu.html'); // Redirect to admin dashboard
        } elseif ($user['role'] === 'faculty') {
            header('Location: faculty_dashboard.html');
        } elseif ($user['role'] === 'student') {
            header('Location: student_dashboard.html');
        }
    } else {
        echo "Invalid email or password.";
    }
}
?>
