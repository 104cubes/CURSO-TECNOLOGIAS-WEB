<?php 

if ($_SESSION['user']){
   
   // el código de
   echo "string";
   ?>

   <!DOCTYPE html>
   <html lang="en">
   <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
   </head>
    <body>
 <?php 
    if ($_SESSION['usertipe'] == "admin"){
        ?>
            
        <?php
    }
 ?>
   </body>
   </html>
<?php } ?>