var clicks = 0;
var signInSuccess = false;
var signInName = "";

function onClick() {
		if (clicks === 0) {
		document.getElementById("demo").innerHTML = "go back to your family"; 
		clicks += 1;
		} else if (clicks === 1) {
		document.getElementById("demo").innerHTML = "Have you called your parents today? You should. They've been thinking about you.";
		clicks +=1
		} else if (clicks === 2) {
		document.getElementById("demo").innerHTML = "I know you're alone, I am too.";
		clicks +=1
		} else if (clicks === 3) {
		document.getElementById("demo").innerHTML = "<img src=\"poo.jpg\">"; //backslash is for the special onez
		clicks +=1
		} else if (clicks === 4) {
		window.location.href = "sign-in.html";
		} 
}



function onSuccess(googleUser) {
	signInSuccess = true;
	var profile = googleUser.getBasicProfile();
	var name = profile.getName();
	var firstName = profile.getGivenName();
	var lastName = profile.getFamilyName();
	signInName = profile.getName();
	console.log('Logged in as: ' + name);	
	console.log('ID: ' + profile.getId());
	console.log('Email: ' + profile.getEmail());
	
	var things = ["Click me to find out who\'s eating out your juicy " + firstName + " Mc" + lastName + " combo!", "Click me to see who\'s getting drizzled with your creamy " + lastName + " sauce!", "Click me to see who just dropped a new hit single! (That's you, " + firstName + ". You're the single.)"];
	var thing = things[Math.floor(Math.random()*things.length)];
	document.getElementById("demo2").innerHTML = thing;
}



function loadGirlfriendHTML(profileName) {
	var profileName = signInName;	
	if (signInSuccess) {
	if (clicks === 0) {
		var firstNames = ["Bob John", "Sue", "Naruto", "Janet", "Mahkaila", "Chihuahua", "Tekken", "Mario", "Jesus", "Dragon", "Daddy"];
		var fristName = firstNames[Math.floor(Math.random()*firstNames.length)];
		var lastNames = ["Fabio", "Gan", "Squarepants", "Jones", "America", "Weeduser", "Inmyasol", "Muscleman", "Oracle", "Mayonnaise", "Giraldo"];
		var rastName = lastNames[Math.floor(Math.random()*lastNames.length)];
		var age = Math.floor((Math.random() * 70) + 18);
		var occupations = ["Student", "Lonely House Wife", "Software Engineer", "Gynaecologist", "Soundcloud DJ", "Weeduser", "Business Advisor", "Marine Biologist"];
		var occupation = occupations[Math.floor(Math.random()*occupations.length)];
		var interest = ["Helping lonely elderly people", "Helping endangered animals overcome their genetic bottleneck", "Providing food for the homeless community", "Getting drunk and/or high to forget about emotional pain, then ending up with a more painful emotional hangover", "Has 4 joy division shirts in their closet, which is 5 joy division shirts too many", "Going on reddit, then crying for going on reddit", "Smoke pot, then crying for smoking pot", "Watching anime, playing dating simulation games, pretending they know more Japanese than an actual Japanese person", "Fighting their 5 year old nephew", "Acting like they don't like their crush, then crying when their crush doesn't give them attention", "Looking for a 'twink' section in every library/website/institution", "Playing League of Legends, then crying for playing League of Legends", "Playing 'the floor is lava' but instead of lava the floor is commitment", "Calling not only their dad 'Zaddy', but your dad too", "Changing the song to Untouched by the Veronicas at every party they attend"];
		var interests = interest[Math.floor(Math.random()*interest.length)];
		document.getElementById("congratz").innerHTML = "Your New Lover... " + fristName + " " + rastName + "!";
		document.getElementById("demo2").innerHTML = "Age: " + age + " Occupation: " + occupation + " Interests: " + interests;
		document.getElementById("clickAgain").innerHTML = "Want to know what they look like? Click me again!";
		clicks += 1;
		
		} else if (clicks === 1) {
		var girlfriendHTML;
		var images = ["<img src=\"poo2.jpg\">", "<img src=\"girlfriend1.jpg\">", "<img src=\"girlfriend15.jpg\">", "<img src=\"girlfriend21.jpg\">", "<img src=\"girlfriend13.jpg\">", "<img src=\"girlfriend16.jpg\">", "<img src=\"girlfriend17.jpg\">", "<img src=\"girlfriend18.jpg\">", "<img src=\"girlfriend19.jpg\">", "<img src=\"girlfriend20.jpg\">", "<img src=\"girlfriend23.jpg\">", "<img src=\"girlfriend6.jpg\">", "<img src=\"girlfriend22.jpg\">"];
		var image = images[Math.floor(Math.random()*images.length)];
			if (profileName === "Anna Gan") {
			girlfriendHTML = "<img src=\"girlfriend1.jpg\">";
				} else if (profileName === "Ivy Calvert") {
			girlfriendHTML = "<img src=\"girlfriend2.jpg\">";
				} else if (profileName === "Tess Griffiths") {
			girlfriendHTML = "<img src=\"girlfriend8.jpg\">";
				} else if (profileName === "Mahkaila Jones") {
			girlfriendHTML = "<img src=\"girlfriend10.jpg\">";
				} else if (profileName === "Bryan Loh") {
			girlfriendHTML = "<img src=\"girlfriend5.jpg\">";
				} else if (profileName === "Shivashish Andrews") {
			girlfriendHTML = "<img src=\"girlfriend4.jpg\">";
				} else if (profileName === "Phoebe Zeller") {
			girlfriendHTML = "<img src=\"girlfriend7.jpg\">";
				} else if (profileName === "Yifei Li") {
			girlfriendHTML = "<img src=\"girlfriend3.jpg\">";
				} else if (profileName === "May Huang") {
			girlfriendHTML = "<img src=\"girlfriend9.jpg\">";
				} else if (profileName === "Ellen Kelly") {
			girlfriendHTML = "<img src=\"girlfriend12.jpg\">";
				} else if (profileName === "Kristin Li") {
			girlfriendHTML = "<img src=\"girlfriend11.jpg\">";
				} else if (profileName === "Elyse Phee") {
			girlfriendHTML = "<img src=\"girlfriend14.jpg\">";
				} else if (profileName === "Wendy Pang") {
			girlfriendHTML = "<img src=\"girlfriend6.jpg\">";
				} else if (profileName === "Sarah Song") {
			girlfriendHTML = "<img src=\"girlfriend11.jpg\">";
				} else if (profileName === "Jenna McGrath") {
			girlfriendHTML = "<img src=\"girlfriend14.jpg\">";
				} else {
			girlfriendHTML = image;
				}
		document.getElementById("demo2").innerHTML = girlfriendHTML;
		document.getElementById("clickAgain").innerHTML = "They can't wait to get to know you! Just click on your options below and start chatting with them NOW!";
		document.getElementById("messengerBot").style.display = 'block';
		clicks +=1
		} 
	} else {
		document.getElementById("demo2").innerHTML = "dont click me asshole";
		document.getElementById("messengerBot").style.display = 'none';
	}
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
	signInSuccess = false;
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
		document.getElementById("demo2").innerHTML = "SIGN IN AND WATCH THIS SPACE....";
		document.getElementById("congratz").innerHTML = "";
		document.getElementById("clickAgain").innerHTML = "";
		document.getElementById("messengerBot").style.display = 'none';
		location.reload();
	});
  }
  
  
window.fbAsyncInit = function() {
      FB.init({
        appId: "2290633061161942",
        xfbml: true,
        version: "v2.6"
      });

    };

    (function(d, s, id){
       var js, fjs = d.getElementsByTagName(s)[0];
       if (d.getElementById(id)) { return; }
       js = d.createElement(s); js.id = id;
       js.src = "//connect.facebook.net/en_US/sdk.js";
       fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
