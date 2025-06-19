import firebase from "firebase";

const config = {
	apiKey: 'AIzaSyCk0ajT-kPDIddzjKBpfeFVc_WUHobFgRE',
	authDomain: 'chat-hut-1e09a.firebaseapp.com',
	projectId: 'chat-hut-1e09a',
	storageBucket: 'chat-hut-1e09a.firebasestorage.app',
	messagingSenderId: '219785804106',
	appId: '1:219785804106:web:9e2f4586ce8ad19a7ba9b3',
	measurementId: 'G-0L7JYLE4YT',
	databaseURL: 'https://chat-hut-1e09a-default-rtdb.firebaseio.com/',
};

const firebaseConfig = {
	
};

firebase.initializeApp(config);
firebase.firestore().settings({
  timestampsInSnapshots: true,
});

export const myFirebase = firebase;
export const myFirestore = firebase.firestore();
export const myStorage = firebase.storage();
