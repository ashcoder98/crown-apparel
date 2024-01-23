import {signInWithGooglePopup, createUserDocumentFromAuth} from "../../utils/firebase/firebase.utils";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import FormInput from "../../components/form-input/form-input.component";

import { useState } from "react";
const Authentication = () => {

const defaultFormFields = {
    email: '',
    password: ''
};
    
const [formFields, setFormFields] = useState(defaultFormFields);



    const logGoogleUser = async() => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    };


    
    return (
        <div>
            <h1>Sign In Page</h1>
         
            <button onClick={logGoogleUser}>Sign In with Google Popup</button>
               
            <SignUpForm></SignUpForm>
        </div>
    )
};

export default Authentication;