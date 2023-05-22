import firebase from "firebase/compat/app";
import {getDatabase} from "firebase/database"
const firebaseConfig = {
    apiKey: "AIzaSyAWMOcShV_Lib3LmoUt51MR7VaYlUCCUL0",
    authDomain: "firstapp-7ea0c.firebaseapp.com",
    databaseURL: "https://firstapp-7ea0c-default-rtdb.firebaseio.com",
    projectId: "firstapp-7ea0c",
    storageBucket: "firstapp-7ea0c.appspot.com",
    messagingSenderId: "804546319447",
    appId: "1:804546319447:web:cb4885f93bc3e9e901bf12",
    measurementId: "G-GJLXJTQS9J"
};
if(firebase.apps.length==0){
    firebase.initializeApp(firebaseConfig);
}

const db =getDatabase();
export{db}