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

var welcome = localStorage.getItem("username");
document.getElementById("welcome").innerHTML = "Welcome " + welcome + "!"

function addroom() {
    roomname = document.getElementById("room_name").value;
    localStorage.setItem("roomname", roomname);
    firebase.database().ref("/").child(roomname).update({

        purpose: "addingroomname"
    });
    window.location = "kwitter_page.html";
}

function getData() {
    firebase.database().ref("/").on('value',
        function (snapshot) {
            document.getElementById("output").innerHTML =
                "";
            snapshot.forEach(function (childSnapshot) {
                childKey = childSnapshot.key;
                Room_names = childKey;
                //Start code

                row = "<div class='room_names' id=" + Room_names + " onclick='redirectToRoomName(this.id)'>" + Room_names + " </div> <hr>"
                document.getElementById("output").innerHTML += row;
                //End code
            });
        });
}
getData();

 function redirectToRoomName(name) {

    localStorage.setItem("roomname", name);
    window.location = "kwitter_page.html";
 }

 function logout() {
    
    window.location = "index.html";    
    localStorage.removeItem("username");
    localStorage.removeItem("room_name");
    
 }