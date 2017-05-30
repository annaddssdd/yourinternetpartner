var clicks = 0;
//var signInSuccess = false;
//var signInName = "";
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
	//signInSuccess = true;
	var profile = googleUser.getBasicProfile();
	var name = profile.getName();
	var firstName = profile.getGivenName();
	var lastName = profile.getFamilyName();
	loadGirlfriendHTML();
	console.log('Logged in as: ' + name);	
	console.log('ID: ' + profile.getId());
	console.log('Email: ' + profile.getEmail());
	//document.getElementById("demo2").innerHTML = "Find out who's eating out your juicy " + firstName + " Mc" + lastName + " combo!";
}

function loadGirlfriendHTML( profileName ){
	var girlfriendHTML;
		if (profileName === "Anna Gan") {
		girlfriendHTML = "<img src=\"girlfriend1.jpg\">";
	} else if (profileName === "Ellen Kelly") {
		girlfriendHTML = "<img src=\"girlfriend3.jpg\">";
	} else if (profileName === "Ivy Calvert") {
		girlfriendHTML = "<img src=\"girlfriend4.jpg\">";
	} else if (profileName === "Tom Lewis") {
		girlfriendHTML = "<img src=\"girlfriend5.jpg\">";
	} else {
		girlfriendHTML = "<img src=\"girlfriend2.jpg\">";
	}
		document.getElementById("demo2").innerHTML = girlfriendHTML;
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



function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
				document.getElementById("demo2").innerHTML = "CHECK OUT YOUR GIRLFRIEND NOW!";
	});
  }
 
