import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBA_nYXPTIi6XbxgCtDSnmazwSKbjIoGJY",
    authDomain: "ecommerce2021-reactjs.firebaseapp.com",
    projectId: "ecommerce2021-reactjs",
    storageBucket: "ecommerce2021-reactjs.appspot.com",
    messagingSenderId: "375630521033",
    appId: "1:375630521033:web:0c8293ccbf99baf88e6318"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();

  export {auth};