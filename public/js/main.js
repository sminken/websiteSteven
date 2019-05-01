// Initialize Firebase
var config = {
  apiKey: "AIzaSyD6z7tY74ZceOYjRBzzn0JuM4ERJ9cy-fk",
  authDomain: "websitesteven-702e8.firebaseapp.com",
  databaseURL: "https://websitesteven-702e8.firebaseio.com",
  projectId: "websitesteven-702e8",
  storageBucket: "websitesteven-702e8.appspot.com",
  messagingSenderId: "685295209737"
};
firebase.initializeApp(config);

// Referenced firebase database
var berichtenRef = firebase.database().ref('berichten');

// Listen for form submit
document.getElementById('contactFormulier').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  var naam = getInputVal('naam');
  var email = getInputVal('email');
  var telefoon = getInputVal('telefoon');
  var onderwerp = getInputVal('onderwerp');
  var bericht = getInputVal('bericht');

 saveMessage(naam, email, telefoon, onderwerp, bericht);

 // Show alert
 document.querySelector('.alert').style.display = 'block';
 // Hide alert after 3 sdconds
 setTimeout(function() {
    document.querySelector('.alert').style.display = 'none';
 }, 3000);

// Clear form
 document.getElementById('contactFormulier').reset();
}

// Get input values from the form
function getInputVal(id) {
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(naam, email, telefoon, onderwerp, bericht) {
  var nieuweBerichtenRef = berichtenRef.push();
  nieuweBerichtenRef.set({
    naam: naam,
    email: email,
    telefoon: telefoon,
    onderwerp: onderwerp,
    bericht: bericht
  });
}
