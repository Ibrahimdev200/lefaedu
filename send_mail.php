<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $message = filter_var($_POST['message'], FILTER_SANITIZE_STRING);

    // Email configuration
    $to = 'damilarejames@gmail.com';
    $subject = 'New Contact Message';
    $body = "Name: $name\nEmail: $email\n\nMessage:\n$message";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo 'success';
    } else {
        echo 'fail';
    }
} else {
    header('HTTP/1.0 405 Method Not Allowed');
}
?>
