<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" type="text/css" href="css/Contact.css">
</head>

<body>
  <div class="container">
    <h1>Contact Us</h1>
    <form method="POST" action="send_email.php">
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" required>

      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required>

      <label for="message">Message:</label>
      <textarea id="message" name="message" rows="4" required></textarea>

      <input type="submit" value="Submit">
    </form>
  </div>

  <?php
  if ($_SERVER["submit"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $to = 'bipingupta9890@gmail.com';
    $subject = 'New Contact Form Submission';
    $email_body = "Name: $name\nEmail: $email\nMessage: $message";
    $headers = "From: $email";

    if (mail($to, $subject, $email_body, $headers)) {
      echo '<p>Thank you for your message! We will get back to you soon.</p>';
    } else {
      echo '<p>Oops! Something went wrong. Please try again later.</p>';
    }
  }
  ?>

</body>

</html>