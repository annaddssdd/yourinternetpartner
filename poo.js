var clicks = 0;


function onClick() {
		if (clicks === 0) {
		document.getElementById("demo").innerHTML = "go back to your family"; 
		clicks += 1;
		} else if (clicks === 1) {
		document.getElementById("demo").innerHTML = "no matter how much you try you will not find love";
		clicks +=1
		} else if (clicks === 2) {
		document.getElementById("demo").innerHTML = "god..... does not exist";
		clicks +=1
		} else if (clicks === 3) {
		document.getElementById("demo").innerHTML = "<img src=\"poo.jpg\">"; //backslash is for the special onez
		clicks +=1
		} else if (clicks === 4) {
		window.location.href = "sign-in.html";
		} 
}

function onSuccess(googleUser) {
		console.log('Logged in as: ' + googleUser.getBasicProfile().getName());
	}
function onFailure(error) {
		console.log(error);
	}
function renderButton() {
		gapi.signin2.render('my-signin2', {
			'scope': 'profile email',
			'width': 240,
			'height': 50,
			'longtitle': true,
			'theme': 'light',
			'onsuccess': onSuccess,
			'onfailure': onFailure
			});
	}
	

if (auth2.isSignedIn.get()) {  var profile = auth2.currentUser.get().getBasicProfile();  console.log('ID: ' + profile.getId());  console.log('Full Name: ' + profile.getName());  console.log('Given Name: ' + profile.getGivenName());  console.log('Family Name: ' + profile.getFamilyName());  console.log('Image URL: ' + profile.getImageUrl());  console.log('Email: ' + profile.getEmail());}

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
  }
