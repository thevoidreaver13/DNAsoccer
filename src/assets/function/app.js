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
    signUp();
}

function signUp() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode === 'auth/weak-password') {
            alert('รหัสผ่านไม่ถูกต้อง');
        } else {
            alert(errorMessage);
        }
        console.log(error);
    });
}

function signIn() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var auth = firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode === 'auth/wrong-password') {
            alert('รหัสผ่านไม่ถูกต้อง');
        } else {
            alert(errorMessage);
        }
        console.log(error);
    });
    console.log(auth);
}

function logout() {
    firebase
        .auth()
        .signOut();
}