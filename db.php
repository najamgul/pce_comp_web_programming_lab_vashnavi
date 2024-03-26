<?php
$db_host = 'localhost';
$db_username = 'root';
$db_password = '';
$db_name = 'user_authentication';

$connection = mysqli_connect($db_host, $db_username, $db_password, $db_name);

if (!$connection) {
    die("Connection failed: " . mysqli_connect_error());
}
?>
