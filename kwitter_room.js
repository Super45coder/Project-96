// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOfRF1XJ2zFdwszrXrUlkcGI38JvcZv2M",
  authDomain: "lets-chat-70eba.firebaseapp.com",
  databaseURL: "https://lets-chat-70eba-default-rtdb.firebaseio.com",
  projectId: "lets-chat-70eba",
  storageBucket: "lets-chat-70eba.appspot.com",
  messagingSenderId: "824396998025",
  appId: "1:824396998025:web:3e827d1e1ef6228824ed58"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

username = localStorage.getItem("Username");
console.log("Welcome"); 
audio1 = document.getElementById("welcome_message");

function logout(){
    localStorage.removeItem("Username");
    window.location = "index.html";
}
function welcome_person(){
  username = localStorage.getItem("Username");
  document.getElementById("username").innerHTML = "Welcome #" + username + "!!!";
  audio1 = document.getElementById("welcome_message");
  audio1.play();
}
function addRoom(){
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
});
  localStorage.setItem("Room_name", room_name);
}
function getData() {
  firebase.database().ref("/").on('value',
function(snapshot) {
  document.getElementById("output").innerHTML = "";
snapshot.forEach(
function(childSnapshot) {
  childKey = childSnapshot.key;
Room_names = childKey;
//Start code
row = "<div class='room_name' id=" + room_names + "onclick='redirectToRoomName(this.id)'>#" + room_names + "</div></hr>";
document.getElementById("output").innerHTML = row;
//End code
});});}
getData();
function redirectToRoomName(){
  window.location = "kwitter_page.html";
}
