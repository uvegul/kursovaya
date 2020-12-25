<?php
<<<<<<< HEAD
require_once('db.php');
    
$email = $_POST['email'];
$name = $_POST['name'];
$password = md5(md5(trim($_POST['password'])));
    
$sql = "INSERT INTO users (name, email, password)
    VALUES ('$name', '$email', '$password')";
   
if ($conn->query($sql) === TRUE) {
    echo "Поздравляю ". $name ." ! Вы успешно зарегистрировались.";
    header("Location: main.html#zatemnenie");
} else {
    echo 'Ошибка! '  . $conn->error;
} 
=======
    $servername = "localhost";
    $username = "root";
    $password = "root";
    $dbname = "db_main";

    $conn = new mysqli($servername, $username, $password, $dbname);

    if($conn ->connect_error){
    die("failed to connect ".$conn->connect_error);
    }
    
    $email = $_POST['email'];
    $name = $_POST['name'];
    $password = $_POST['password'];
    echo $email, "<br>", $name, "<br>", $password; 
    $sql = "INSERT INTO users (name, email, password)
        VALUES ('$name', '$email', '$password')";
   
    if ($conn->query($sql) === TRUE) {
    echo "<br>New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
} 
    echo $email;
>>>>>>> 471c4fdf4817284d737d71fc2e9c3f5c7452644e
   
?>