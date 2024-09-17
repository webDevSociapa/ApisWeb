<?php
header('Content-Type: application/json');   

// Ensure the form is submitted via POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Fetch and sanitize input data
    $fullName = htmlspecialchars($_POST['fullName']);
    $cityLocation = htmlspecialchars($_POST['cityLocation']);
    $emailAddress = htmlspecialchars($_POST['emailAddress']);
    $phoneNumber = htmlspecialchars($_POST['phoneNumber']);
    $message = htmlspecialchars($_POST['message']);

    // Email details
    $to = "robinkhan1122111@gmail.com"; // Replace with your email
    $subject = "New Message from Contact Form";
    $body = "Full Name: $fullName\nCity Location: $cityLocation\nEmail Address: $emailAddress\nPhone Number: $phoneNumber\n\nMessage:\n$message";

    // Headers for email
    $headers = "From: $emailAddress";

    // Attempt to send the email
    if (mail($to, $subject, $body, $headers)) {
        // If mail is sent successfully
        echo json_encode(['success' => true]);
    } else {
        // If mail fails to send
        echo json_encode(['success' => false]);
    }
} else {
    echo json_encode(['success' => false, 'message' => 'Invalid request method.']);
}
?>
