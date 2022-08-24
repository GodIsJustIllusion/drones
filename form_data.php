<?php 
    if($_SERVER['REQUEST_METHOD'] == 'POST') {
        $name = $_POST['name'];
        $email = $_POST['email'];
        $phone = $_POST['phone'];
        print "Имя: $name<br>Email: $email<br>Phone: $phone";
    }
