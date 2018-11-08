<?php
$request = $_POST['request'];

// Upload file
if($request == 1){
     $filename = $_FILES['file']['name'];
    /* Location */
    $location = "imgfile/".$filename;
    $uploadOk = 1;
    $imageFileType = pathinfo($location,PATHINFO_EXTENSION);

    // Check image format
    if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg"
     && $imageFileType != "gif" ) {
         $uploadOk = 0;
    }

    if($uploadOk == 0){
         echo 0;
    }else{
         /* Upload file */
         if(move_uploaded_file($_FILES['file']['tmp_name'],$location)){
             echo $location;
         }else{
             echo 0;
         }
    }
    exit;
}

?>