// import { useEffect } from "react"
// import { getRedirectResult } from "firebase/auth"
// import {auth,signInWithGoogleRedirect} from "../../utils/firebase/firebase.utils"
import {signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils"

import SignUpForm from "../../components/sign-up-form/sign-up-form.component"



const SignIn = ()=>{

     

    // // The useEffect hook will run when the sign in page mounts for the first time. The [] shows that the callback function will be run once  when the sign in component is mounted for the first time
    // // When the page redirects, the application is remounted afresh and the hook now sends the data to be written to the database as the sign in page has been mounted for the first time
    // useEffect(()=>{
    //     async function fetchData(){
    //     // The auth was imported from firebase utils and are the set of rules applicable to the whole application
    //     const response = await getRedirectResult(auth)

    //     if (response){
    //        await createUserDocumentFromAuth(response.user)
    //     }
    // }
    //  fetchData()
    // }, [])

    const logGoogleUser = async () =>{
        // Destructuring the user object from the response received 
        const {user} = await signInWithGooglePopup()
        // Passing the user object containing user details (displayName, email and uid to the createUserDocumentFromAuth function )
        createUserDocumentFromAuth(user)
    }

    return(
        <div>
            {/* A popup will display when button is clicked requiring sign in */}
            <button onClick={logGoogleUser}>
                Sign In with Google PopUp
            </button>
            <SignUpForm />
            {/* <button onClick={signInWithGoogleRedirect}>
                Sign In with Google Redirect
            </button> */}
        </div>
    )
}

export default SignIn