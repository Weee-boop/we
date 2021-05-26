
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDEZ9_bqRWRVoYZYOZS7R9AjGn1hdnnD9M",
      authDomain: "france-paris-cheese.firebaseapp.com",
      databaseURL: "https://france-paris-cheese-default-rtdb.firebaseio.com",
      projectId: "france-paris-cheese",
      storageBucket: "france-paris-cheese.appspot.com",
      messagingSenderId: "771011888768",
      appId: "1:771011888768:web:44c0ba6c2d1960e6a6c865"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+= row;
      //End code
      });});}
getData();
function addRoom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purporse:"adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location="kwitter_page.html";
}

function redirectToRoomName(name)
{
      localStorage.setItem("room_name",name);
        window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
        window.location="index.html";
}