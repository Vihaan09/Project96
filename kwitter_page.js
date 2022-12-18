const firebaseConfig = {
    apiKey: "AIzaSyBNwKp2R9baj57a7sjBFTXafCVg1kC8ckc",
    authDomain: "kwitter-project-c95a0.firebaseapp.com",
    databaseURL: "https://kwitter-project-c95a0-default-rtdb.firebaseio.com",
    projectId: "kwitter-project-c95a0",
    storageBucket: "kwitter-project-c95a0.appspot.com",
    messagingSenderId: "673178778153",
    appId: "1:673178778153:web:ff062d246f1f72f8c67a38"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("username");
  room_name = localStorage.getItem("roomname");

  function send() {
 msg = document.getElementById("message").value;
firebase.database().ref(room_name).push({

  message: msg,
  like: 0,
  username: user_name
});
document.getElementById("message").value="";
  }

  function logout() {
    
    window.location = "index.html";    
    localStorage.removeItem("username");
    localStorage.removeItem("room_name");
    
 }