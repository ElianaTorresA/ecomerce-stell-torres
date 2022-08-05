import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAfw3-zs8yMx9gmPDA5CDKfcMkXXH0dCNI",
    authDomain: "proyecto-stell.firebaseapp.com",
    projectId: "proyecto-stell",
    storageBucket: "proyecto-stell.appspot.com",
    messagingSenderId: "532869879319",
    appId: "1:532869879319:web:59fd7012a15f78ded9ae52"
};

const app = initializeApp(firebaseConfig)

export const initFirebase = () => {
    return app
}
