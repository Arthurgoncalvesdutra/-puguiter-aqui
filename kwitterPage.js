//LINKS FIREBASE
const firebaseConfig = {
      apiKey: "AIzaSyB3PWXZNNzJthYBk-nQqb_bBep_9Alc5ds",
      authDomain: "pughiter.firebaseapp.com",
      databaseURL: "https://pughiter-default-rtdb.firebaseio.com",
      projectId: "pughiter",
      storageBucket: "pughiter.appspot.com",
      messagingSenderId: "479182944462",
      appId: "1:479182944462:web:d8e1508f6b22125343789f"
};
firebase.initializeApp(firebaseConfig);
userName = localStorage.getItem("userName");
roomName = localStorage.getItem("roomName");
function enviar() {
      poorco = document.getElementById("texto").value;
      firebase.database().ref(roomName).push({
            nome: userName,
            texto: poorco,
            likes: 0
      });
      document.getElementById("texto").value = "";
}
function getData() {
      firebase.database().ref("/" + roomName).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "acao") {
                        firebaseMessageId = childKey;
                        messageData = childData;
                        //Início do código
                        nome = messageData["nome"];
                        msg = messageData["texto"];
                        like = messageData["likes"];
                        name_with_tag = "<h4> " + nome + "<img class='user_tick' src='tick.png'>";
                        message_with_tag = "<h4 class='message_h4'>" + msg + "</h4>";
                        like_button = "<button class='btn btn-warning' id=" + firebaseMessageId + " value=" + like + " onclick='updateLike(this.id)'>";
                        span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: " + like + "</span></button><hr>";
tig=name_with_tag+message_with_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML=tig;

                        //Fim do código
                  }
            });
      });
}
getData();
function logout() {
      localStorage.removeItem("userName");
      localStorage.removeItem("roomName");
      window.location = "index.html";
};