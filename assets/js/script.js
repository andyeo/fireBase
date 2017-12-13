// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCSCCC6_58bJBzPJBRxbJ05sdtJPblwmBA",
    authDomain: "fir-54682.firebaseapp.com",
    databaseURL: "https://fir-54682.firebaseio.com",
    projectId: "fir-54682",
    storageBucket: "",
    messagingSenderId: "489038949997"
  };
  firebase.initializeApp(config);



  

	
var databas = firebase.database();

var trainName = "";
var destination = "";
var frequency = 0;
var firstTrain = "";

$( ".btn" ).click(function() {
$("tbody").append('<tr> <th scope="row">n/a</th> <td>Mark</td> <td>Otto</td> <td>@mdo</td> <td>200</td> </tr>')

var trainNameApp = 


//$("add-user").on("click", function(event) {
	//event.preventDefault();
	//name = $("#name-input").val().trim();
	//email = $("#email-input").val().trim();
//	age = $("#age-imput").val().trim();
//	comment = $("#commet-input").val().trim();


//database.ref().push({
//name: name,
//email: email,
//age: age,
//comment: comment,
//dateAdded: firebase.database.ServerValue.TIMESRAMP
//		});
	//});

	//});
//dataRef.ref().on("child_added", function(childSnapshot) {

	});
});

