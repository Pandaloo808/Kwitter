var firebaseConfig = {
  apiKey: "AIzaSyBrSjBmqHz_snlAMVegNgHyr95A54JkjoM",
  authDomain: "doc-is-home.firebaseapp.com",
  databaseURL: "https://doc-is-home-default-rtdb.firebaseio.com",
  projectId: "doc-is-home",
  storageBucket: "doc-is-home.appspot.com",
  messagingSenderId: "1074863772693",
  appId: "1:1074863772693:web:3a7eeb630fbaf989ddaa1c"
};
firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome"+user_name+"!";
function addroom(){
  room_name=document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
  purpose:"adding room name"
    });
  localStorage.setItem("room_name",room_name);
  window.location="kwitter_page.html";
}
function getData() { 
  firebase.database().ref("/").on('value', function(snapshot) 
  { document.getElementById("output").innerHTML = ""; 
   snapshot.forEach(function(childSnapshot) 
 { childKey = childSnapshot.key; Room_names = childKey;
   console.log("room_name"+Room_names);
   row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
   document.getElementById("output").innerHTML += row;
});
}); 
}
function redirectToRoomName(name){
console.log(name);
  localStorage.setItem("room_name",name);
  window.location="kwitter_page.html";
}
