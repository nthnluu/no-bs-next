import TextInput from "../../components/forms/TextInput";
import React, {useState} from "react";
import Button from "../../components/forms/Button";
import fb from "../../util/firebase-config";

const SignUp = () => {

    const [error, setError] = useState(undefined)

    function signUp(event) {
        event.preventDefault()
        if (event.target.password.value === event.target["confirm-password"].value) {
            fb.auth().signInWithEmailAndPassword(event.target.email.value, event.target.password.value)
        } else {
            setError("Passwords must match.")
        }

    }

    return <div className="flex justify-center items-center h-screen">
        <div>
            <div className="w-96 text-center rounded-lg border border-gray-200 p-8">
                <form onSubmit={signUp} className="space-y-4" autoComplete="off">
                    <h1 className="text-4xl font-bold">Sign up</h1>
                    <TextInput label="Email" id="email" type="email" required/>
                    <TextInput label="Password" type="password" id="password" error={error} required/>
                    <TextInput label="Confirm Password" type="password" id="confirm-password"
                               error={error} helperText={error} required/>
                    <div className="text-right pt-4">
                        <Button variant="filled" sizes="lg" color="primary" type="submit">Create account</Button>
                    </div>
                </form>
            </div>
            <div className="text-sm text-center mt-4">
                🛠 Customize this page at <span className="inlineCode">/pages/auth/signup.tsx</span>
            </div>
        </div>
    </div>

}

export default SignUp