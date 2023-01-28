import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils"

const SignIn = ()=>{

    const logGoogleUser = async () =>{
        // Destructuring the user object from the response received 
        const {user} = await signInWithGooglePopup()
        // Passing the user object containing user details (displayName, email and uid to the createUserDocumentFromAuth function )
        createUserDocumentFromAuth(user)
    }
    return(
        <div>
            <h1>Sign In</h1>
            {/* A popup will display when button is clicked requiring sign in */}
            <button onClick={logGoogleUser}>
                Sign In with Google PopUp
            </button>
        </div>
    )
}

export default SignIn