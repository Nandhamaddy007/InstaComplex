<?php 
  $msg = ""; 
  
  // If upload button is clicked ... 
  if (isset($_POST['upload'])) { 
  
    $filename = $_FILES["uploadfile"]["name"]; 
    $tempname = $_FILES["uploadfile"]["tmp_name"];     
        $folder = "assets/".$filename; 
          console.log($folder)
    //$db = mysqli_connect("localhost", "root", "", "photos"); 
  
        // Get all the submitted data from the form 
        //$sql = "INSERT INTO image (filename) VALUES ('$filename')"; 
  
        // Execute query 
        //mysqli_query($db, $sql); 
          
        // Now let's move the uploaded image into the folder: image 
        if (move_uploaded_file($tempname, $folder))  { 
            $msg = "Image uploaded successfully"; 
        }else{ 
            $msg = "Failed to upload image"; 
      } 
  } 
  Console.log($msg)
  //$result = mysqli_query($db, "SELECT * FROM image"); 
?> 