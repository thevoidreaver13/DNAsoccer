function saveOnClick() {
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var name = document.getElementById('name');
    var phone = document.getElementById('phone');
    var address = document.getElementById('address');
    insertData(email.value, password.value, name.value, phone.value, address.value)
}

function insertData(email, password, name, phone, address) {
    var firebaseRef = firebase.database().ref('Member');
    firebaseRef.push({
        email: email,
        password: password,
        name: name,
        phone: phone,
        address: address
    });
    console.log("Register Success");
}