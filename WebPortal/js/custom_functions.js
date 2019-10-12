var login = function() {
    firebase.auth().signInWithEmailAndPassword('kfc@gmail.com', 'typerace').catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        console.log(errorCode);
    });
}
var checkAuth = function() {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            return true;
        } else {
            return false;
        }
    });
}
var logout = function() {
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
        console.log("success");
        window.location.href = "login.html";
    }).catch(function(error) {
        // An error happened.
    });
}