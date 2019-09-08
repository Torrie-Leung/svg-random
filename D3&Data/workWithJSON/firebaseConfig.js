// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAFBxnZL682CQqGe9weCq2BKNR6iysxlDk",
    authDomain: "d3-firebase-b2d9d.firebaseapp.com",
    databaseURL: "https://d3-firebase-b2d9d.firebaseio.com",
    projectId: "d3-firebase-b2d9d",
    storageBucket: "d3-firebase-b2d9d.appspot.com",
    messagingSenderId: "217028417512",
    appId: "1:217028417512:web:162ccadc7fa14e7ab4765d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  //db.settings({ timestampsInSnapshots: true })