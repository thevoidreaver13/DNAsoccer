function saveOnClick() {
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var name = document.getElementById('name');
    var phone = document.getElementById('phone');
    var address = document.getElementById('address');
    insertData(email.value, password.value, name.value, phone.value, address.value)
}

function insertData(email, password, name, phone, address) {
    var firebaseRef = firebase.database().ref();
    firebaseRef.push({
        email: email,
        password: password,
        name: name,
        phone: phone,
        address: address
    });
    console.log("Register Success");
}








window.onload = function() {
    var firebase = firebase.database().ref("User");
    firebaseRef.once('value').then(function(dataSnapshot) {
        console.log(dataSnapshot.key());
    });
    showData();
}

function showData() {
    var firebase = firebase.database().ref("Member");
    firebaseRef.once('value').then(function(dataSnapshot) {
        console.log(dataSnapshot.val());
    });
}