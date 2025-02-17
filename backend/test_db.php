<?php
$dsn = 'mysql:host=testprojet;dbname=mydatabase';
$username = 'myuser';
$password = 'mypassword';

try {
    $dbh = new PDO($dsn, $username, $password);
    echo 'Connection successful!';
} catch (PDOException $e) {
    echo 'Connection failed: ' . $e->getMessage();
}
?>