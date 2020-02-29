<?php
header('Access-Control-Allow-Origin: *'); 
//Creates a class called Message
class Message
{
    public $contactTime;
    public $contactDate;
    public $firstName;
    public $lastName;
    public $emailAddress;
    public $phoneNumber;
    public $textMessage;
}
//Added function to add time and date
$dateVar = date('Y-m-d');
$timeVar = date('H:i:s');

//Creates new message and sets properties
$newMessage = new Message();
$newMessage->contactTime = $timeVar;
$newMessage->contactDate = $dateVar;
$newMessage->firstName = $_POST["firstName"];
$newMessage->lastName = $_POST["lastName"];
$newMessage->emailAddress = $_POST["emailAddress"];
$newMessage->phoneNumber = $_POST["phoneNumber"];
$newMessage->textMessage = $_POST["textMessage"];

//Adds object to array
$messagesList = file_get_contents('../client/public/contact.json');
$jsonInput = json_decode($messagesList, true);
array_push($jsonInput, $newMessage);

//Writes array to JSON file
$jsonData = json_encode($jsonInput);
file_put_contents('../client/public/contact.json', $jsonData);
?>
