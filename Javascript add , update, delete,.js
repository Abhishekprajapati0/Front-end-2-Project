<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>update the data in js objects</title>
</head>
<body>
<script type="text/javascript">
	const person={
		Name : "Abhishek",
		Age : 17,
		Course : "ccc",
		Address : "Rampur",
		Cuntry : "England"

	}
	 console.log(person);

	 //if you want to update and add or delete person details we con use to

	 //1.for the update
     //like this


	 person.name= "arushi",
	 person.age= 17,
	 person.Course = "ccc",
	 person.Address= "Isarri Salempur",
	 person.Cuntry= "India",

	  console.log(person);
	  	
	  //2.for the Add.
	  //like this

	  person.Gender= "female",
	  person.Hobbies = "Listen music",

	   console.log(person);


	    //for the Delete.
	   //Like this

	   delete person.Hobbies,
	   delete person.Gender,

	    console.log(person);



</script>
</body>
</html>