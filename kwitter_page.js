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
room_name=localStorage.getItem("room_name")
function send(){
  msg=document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0
  });
  document.getElementById("msg").value="";
}
function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html"
}
function getData(){
   firebase.database().ref("/"+room_name).on('value', function(snapshot){ 
   document.getElementById("output").innerHTML = ""; 
   snapshot.forEach(function(childSnapshot){ 
   childKey = childSnapshot.key; 
   childData = childSnapshot.val(); 
   if(childKey != "purpose"){ 
   firebase_message_id = childKey; 
   message_data = childData;
     console.log(firebase_message_id);
     console.log(message_data)
     name=message_data['name'];
     message=message_data['message'];
     like=message_data['like'];
     name_width_tag="<h4>"+name+"<img class='user_tick' src='https://thumbs.dreamstime.com/b/blue-tick-icon-vector-symbol-checkmark-isolated-white-background-checked-icon-correct-choice-sign-check-mark-blue-tick-icon-159108544.jpg'></h4>";
     message_width_tag="<h4 class='message_h4'>"+message+"</h4>";
     like_buton="button class='btn btn-warning' id="+firebase_message_id+"value="+like+"onlick='updateLike(this.id)'>";
     span_width_tag="<span class='glyphicon glyphicon-thumbs-up'>like:"+like+"</span> </button> <hr>";
     row=name_width_tag+message_width_tag+like_button+span_width_tag;
     document.getElementById("output").innerHTML+=row;
 } }); }); }
getData();
function updateLike(message_id){
  console.log("clicked on like button"+message_id);
  button_id=message_id;
  likes=document.getElementById(button_id).value;
  updated_likes=Number(likes)+1;
  console.log(updated_likes);
  firebase.database().ref(room_name).child(message_id).update({ like : updated_likes });
}
