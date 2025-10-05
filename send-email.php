<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

// Get POST data
$data = json_decode(file_get_contents("php://input"), true);

$name = htmlspecialchars($data["name"]);
$email = htmlspecialchars($data["email"]);
$phone = htmlspecialchars($data["phone"]);
$message = htmlspecialchars($data["message"]);

$to = "lovro.monkey@gmail.com"; // where the email should go
$subject = "Kontakt s web stranice od: $name";
$body = "Ime: $name\nEmail: $email\nTelefon: $phone\nPoruka:\n$message";

$headers = "From: $email\r\n";
$headers .= "Reply-To: $email\r\n";

// Send the email
if (mail($to, $subject, $body, $headers)) {
  echo json_encode(["status" => "success"]);
} else {
  echo json_encode(["status" => "error"]);
}
?>
