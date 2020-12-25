<?php
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
   
?>