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
funciton addUser() {
  user_name=document.getElementById("user_name").value;
  firebase.database().ref("/").child(user_name).update({
  purpose:"adding user"
  });
}
