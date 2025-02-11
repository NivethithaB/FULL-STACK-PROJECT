<?php
// Database credentials
define('DB_SERVER', 'localhost');
define('DB_USERNAME', 'root');
define('DB_PASSWORD', ''); // Empty password for root if you haven't set one
define('DB_NAME', 'timetable_project');

// Attempt to connect to MySQL database
$conn = new mysqli(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME);

// Check connection
if($conn->connect_error){
    die("Connection failed: " . $conn->connect_error);
}

echo "Connected to the database successfully!";
?>
