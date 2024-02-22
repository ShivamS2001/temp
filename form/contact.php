<?php


   $fuel =$_POST['fuel'];
	 $transmission=$_POST['transmission']; ;
	 $fname=$_POST['fname'];
	 $lname =$_POST['lname'];
	 $email =$_POST['email'];
	 $mobile =$_POST['mobile'];
	 $pdate =$_POST['pdate'];
	 $location =$_POST['location'];
	 $query =$_POST['query'];
//database connection


$connection=mysqli_connect("localhost","id21911224_sahu","Astella@123","id21911224_register");


if(!$connection){
    die("Connection Failed".mysqli_connect_error());
  
}

else{
  $stmt =$connection->prepare("insert into register(fuel,transmission,fname,lname,email,mobile,pdate,location,query)
  values(?,?,?,?,?,?,?,?,?)");
  $stmt->bind_param("sss", $fuel,$transmission,$fname,$lname,,$email,$mobile,$pdate,$location,$query);
  $stmt->execute();
    echo'Registation Successful';
    $stmt->close();
    $connection->close();

}

?>

