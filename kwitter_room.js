const firebaseConfig = {
  apiKey: "AIzaSyBrSjBmqHz_snlAMVegNgHyr95A54JkjoM",
  authDomain: "doc-is-home.firebaseapp.com",
  databaseURL: "https://doc-is-home-default-rtdb.firebaseio.com",
  projectId: "doc-is-home",
  storageBucket: "doc-is-home.appspot.com",
  messagingSenderId: "1074863772693",
  appId: "1:1074863772693:web:3a7eeb630fbaf989ddaa1c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
function getData() { 
  firebase.database().ref("/").on('value', function(snapshot) 
  { document.getElementById("output").innerHTML = ""; 
   snapshot.forEach(function(childSnapshot) 
 { childKey = childSnapshot.key; Room_names = childKey; 
console.log("Room Name - " + Room_names); 
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; 
document.getElementById("output").innerHTML += row; 
}); 
}); 
}
