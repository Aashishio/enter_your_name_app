const firebaseConfig = {
   apiKey: "AIzaSyC5UIFTjnCD9LbgzyjBR9Lp489tEGC4cwk",
   authDomain: "wisdom-a2f26.firebaseapp.com",
   databaseURL: "https://wisdom-a2f26-default-rtdb.firebaseio.com",
   projectId: "wisdom-a2f26",
   storageBucket: "wisdom-a2f26.appspot.com",
   messagingSenderId: "796379173338",
   appId: "1:796379173338:web:b59b04a46edb1a8c9db0e3",
  measurementId: "G-5N0XMM0H51"
};
i

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//Add your firebase links here:
function addUser() {
  user_name = document.getElementById("user_name").value;
  firebase.database().ref("/").child(user_name).update({
    purpose: "adding user"
  });
}