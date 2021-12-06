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
  document.getElementVyId("msg").value="";
}
function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html"
}
