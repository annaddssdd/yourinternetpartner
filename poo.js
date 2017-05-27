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


function start() {
  gapi.client.init({
    'apiKey': 'AIzaSyAXVWtUzAZoCdHEcaFGO2Z9oYawVywAY88',
    'clientId': '257135603408-haa6s5sb4rmrrb5a21g9jpohrvla30pe.apps.googleusercontent.com',
    'scope': 'plus.login',
  }).then(function() {
    return gapi.client.request({
      'path': 'https://people.googleapis.com/v1/people/me?requestMask.includeField=person.names',
    })
  }).then(function(response) {
    console.log(response.result);
  }, function(reason) {
    console.log('Error: ' + reason.result.error.message);
  });
};
gapi.load('client', start);

function onSuccess(googleUser) {
		var profile = googleUser.getBasicProfile();
		console.log('Logged in as: ' + profile.getName());
		console.log('ID: ' + profile.getId());
		console.log('Email: ' + profile.getEmail());
	
	var request = gapi.client.plus.people.get({
  'userId' : 'me'
});

request.execute(function(resp) {
  console.log('ID: ' + resp.id);
  console.log('Display Name: ' + resp.displayName);
  console.log('Image URL: ' + resp.image.url);
  console.log('Profile URL: ' + resp.url);
});
	
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
    });
  }
 
