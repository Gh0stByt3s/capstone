// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { signInWithRedirect } from "firebase/auth";
import {getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword} from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2q3WkJ_CHg088YMysUcb90SCLnnD5B10",
  authDomain: "crwn-clothing-7b1ba.firebaseapp.com",
  projectId: "crwn-clothing-7b1ba",
  storageBucket: "crwn-clothing-7b1ba.appspot.com",
  messagingSenderId: "1053787211515",
  appId: "1:1053787211515:web:f5ef79f1ce74015fae125e"
};

// Initialize Firebase
const FirebaseApp = initializeApp(firebaseConfig);

//The provider instance can be more than one depending on the instructions needed by the app
// There are a number of providers eg Facebook, Twitter, Github
const googleprovider = new GoogleAuthProvider()


// Any interaction with the provider should force the user to select an account
googleprovider.setCustomParameters({
    "prompt": "select_account"
})

// There can only be one set of authentication rules for the whole application so this will be only one
export const auth = getAuth(FirebaseApp)


export const signInWithGooglePopup = () => signInWithPopup(auth, googleprovider) 

// export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleprovider) 



// Points to the database in the console
export const db = getFirestore(FirebaseApp)

// The async function will receive the data from the async logGoogleUser function in the sign in component and store it in the Firebase database

export const createUserDocumentFromAuth = async(userAuth, additionalInformation={}) => {
  // The user data contains a uid that is unique to the user 
  // The doc parameters are database, collection and unique identifier
    const userDocRef = doc(db,'users', userAuth.uid)

    // Storing the response of the promise in a variable to check if the data exists in the Firebase database
    const userSnapshot = await getDoc(userDocRef)
   
    if(!userSnapshot.exists()){
      const {displayName, email} = userAuth
      const createdAt = new Date()

      try {
        // Creating a new user in the Firebase database using data from userAuth in the 'users' collection
        await setDoc(userDocRef, {
          displayName,
          email,
          createdAt,
          ...additionalInformation
        });
        
      } catch (error) {
        console.error("Error creating user: ", error.message);
      }
    }

    // If the data exists in the database, it will be returned
    return userDocRef
}

export const CreateAuthUserWithEmailAndPassword = async(email, password)=>{
  if(!email || !password) return

  return await createUserWithEmailAndPassword(auth, email, password)

}

