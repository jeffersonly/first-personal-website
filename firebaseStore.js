// Initialize Firebase
var config = {
    apiKey: "AIzaSyCAO6bswZxuUfFxHyfuEZkg7jQWsWQvqCI",
    authDomain: "personalwebsite-c69b4.firebaseapp.com",
    databaseURL: "https://personalwebsite-c69b4.firebaseio.com",
    projectId: "personalwebsite-c69b4",
    storageBucket: "personalwebsite-c69b4.appspot.com",
    messagingSenderId: "133001980293"
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
e.preventDefault();

// Get values
var name = getInputVal('name');
var email = getInputVal('email');
var phone = getInputVal('phone');
var message = getInputVal('message');

// Save message
saveMessage(name, email, phone, message);

// Show alert
document.querySelector('.alert').style.display = 'block';

// Hide alert after 5 seconds
setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
},5000);

// Clear form
document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, phone, message){
var newMessageRef = messagesRef.push();
newMessageRef.set({
    name: name,
    email:email,
    phone:phone,
    message:message
});
}
