<?php
require_once('db.php');
    
$name = $_POST['name'];
$klass = $_POST['klass'];
$Poz = $_POST['Poz'];
$Kom = $_POST['Kom'];
$Em = $_POST['Em'];
$Raz = $_POST['Raz'];
$Opi = $_POST['Opi'];
$Dos = $_POST['Dos'];
$Vne = $_POST['Vne'];
    
$sql = "INSERT INTO userres (name, klass, Poz, Kom, Em, Raz, Opi, Dos, Vne)
    VALUES ('$name', '$klass', '$Poz','$Kom', '$Em', '$Raz', '$Opi', '$Dos', '$Vne')";
   
if ($conn->query($sql) === TRUE) {
    echo "Поздравляю ". $name ." ! Данные успешно отправлены!". $Poz. $Kom;
} else {
    echo 'Ошибка! '  . $conn->error;
} 
   
?>