<?php


  $response = @file_get_contents('https://jsonplaceholder.typicode.com/comments?postId=3');
 

  if ($response === false) {
      $error = error_get_last();
      echo "Unable to connect";
} else {
      
  $response = json_decode($response);
 
  foreach ($response as $value) {
    echo $value->name, "#";
  }
}



?>