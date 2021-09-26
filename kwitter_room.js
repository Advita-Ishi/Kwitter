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

var user_name = localStorage.getItem("User_Name");
document.getElementById("username").innerHTML = "Welcome " + user_name + "!";

function add_Room() {
      room_name = document.getElementById("Room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "add room name"
      });

      localStorage.setItem("Room_name", room_name);
      window.location = "kwitter_page.html";
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log(Room_names);
                  row = "<div class= 'room_name' id= "+Room_names+" onclick= 'RedirectToRoomName(this.id)' >#" +Room_names +"</div><hr>";
                  document.getElementById("output").innerHTML +=row;
                  //End code
            });
      });
}
getData();
function RedirectToRoomName(name) {
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}