// Paste the code from Firebase 
var config = {
    apiKey: "AIzaSyCqc711XObKxHnI9_U8T_T_kprd_4nL6lk",
    authDomain: "project-7894033190889671362.firebaseapp.com",
    databaseURL: "https://project-7894033190889671362.firebaseio.com",
    projectId: "project-7894033190889671362",
    storageBucket: "project-7894033190889671362.appspot.com",
    messagingSenderId: "585049540548"
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('contact77');

$('#contactForm2').submit(function (e) {
  e.preventDefault();

  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: $('.name').val(),
    sex: $('.sex99').val(),
    email: $('.email').val(),
    product1: $('.product1').val(),
    product2: $('.product2').val(),
    product3: $('.product3').val(),
    comment: $('.com99').val(),

  });

  $('.success-message').show();

  $('#contactForm2')[0].reset();
});