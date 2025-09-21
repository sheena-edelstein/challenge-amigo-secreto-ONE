let friends = [];

function addItemList(insertItem) {
     let listRow = document.createElement("li");
     listRow.innerHTML = insertItem;
     document.getElementById("friendsList").append(listRow);
     document.getElementById("friend").value = null;
}

function addFriend() {
    inputFriend = document.getElementById("friend").value;
    if (inputFriend == [] || typeof inputFriend !== "string"){
        alert("Por favor, insira um nome válido.");
    } else {
        friends.push(inputFriend);
        addItemList(inputFriend);
    }
}

function drawFriends() {
    let qtdFriends = friends.length;
    if (qtdFriends < 3) {
        alert("É necessário ter no mínimo 3 amigos para realizar o sorteio.");
    } else {
        chosenFriend = Math.floor(Math.random() * qtdFriends)
        removeListUpdate();
        drawResult(friends[chosenFriend])
    }
}

function removeListUpdate() {
    list = document.getElementById("friendsList").innerHTML = '';
};

function drawResult (result) {
     document.getElementById("result").innerHTML = "Parabéns! Você sorteou: " + result + ". Não conte para ninguém!";
}