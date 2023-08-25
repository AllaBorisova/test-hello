<?php

$message = "Name: ".$_POST["name"]."<br>E-mail: ".$_POST["email"]."<br>";

if (isset($_POST["special"]) && !empty($_POST["special"])){
    $message .= "Special: ".$_POST["special"]."<br>";
}

if (mail("alla.borisova27@gmail.com", "Test message", $message, "Content-type: text/html; charset=utf-8\r\nFrom: noreply@test-hello.ru.xsph.ru")){
  $result = "ok";
} else {
  $result = "error";
}
echo $result;
