<?php
$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "db_main";

$conn = new mysqli($servername, $username, $password, $dbname);

if($conn ->connect_error){
die("failed to connect ".$conn->connect_error);
}
?>