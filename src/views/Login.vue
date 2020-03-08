<template>


<div id ="mydiv">

<button class="button"  @click="login"><i class="fa fa-google"></i></button>

<button class="button"  @click="loginFacebook"><i class="fa fa-facebook"></i></button>
</div>


</template>

<script>

import firebase from 'firebase'
export default {
	
	methods:{
	login(){

	   var provider = new firebase.auth.GoogleAuthProvider();
	   provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

	   firebase.auth().signInWithPopup(provider).then(result=> {
  // This gives you a Google Access Token. You can use it to access the Google API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;
 this.$router.push('/')
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
});



	},

	loginFacebook(){

	   var provider = new firebase.auth.FacebookAuthProvider();

	   firebase.auth().signInWithPopup(provider).then(result => {
  // This gives you a Facebook Access Token. You can use it to access the Facebook API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;
 	 this.$router.push('/')
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
});
	

	}
	}
}
</script>

<style>

#mydiv {
 margin: auto;
 padding: 23.5%;
	background: linear-gradient(-45deg, #f2f2f2, #e6e6e6, #d9d9d9,  #cccccc);
	background-size: 400% 400%;
	animation: gradient 15s ease infinite;
}

@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}

.button {
  border: none; /* Remove borders */
  background: transparent;
}

.fa {
  padding: 20px;
  font-size: 30px;
  width: 100px;
  text-align: center;
  text-decoration: none;


}

/* Add a hover effect if you want */
.fa:hover {
  opacity: 0.7;
}

/* Set a specific color for each brand */

/* Facebook */
.fa-facebook {
  background: #3B5998;
  color: white;

}

.fa-google {
  background: #dd4b39;
  color: white;
}
</style>

<style>
  @import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css';
</style>