//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyCRtZ4tHWfqVGXkRjrbZyIFFwCNsK1cCb0",
      authDomain: "kwitter-84af5.firebaseapp.com",
      databaseURL: "https://kwitter-84af5-default-rtdb.firebaseio.com",
      projectId: "kwitter-84af5",
      storageBucket: "kwitter-84af5.appspot.com",
      messagingSenderId: "1000382674527",
      appId: "1:1000382674527:web:fd26a0e88ee4c8e4810dea"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send() {
msg = document.getElementById("msg").value;
firebase.database().ref(room_name).push({
      names: user_name,
      message: msg,
      like: 0
});
document.getElementById("msg").innerHTML = "";
}