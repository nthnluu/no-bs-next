import TextInput from "../../components/forms/TextInput";
import React from "react";
import Button from "../../components/forms/Button";
import fb from "../../util/firebase-config";
import {useRouter} from "next/router";

const SignIn = () => {
    const router = useRouter()

    function signIn(event) {
        event.preventDefault()
        fb.auth().signInWithEmailAndPassword(event.target.email.value, event.target.password.value)
            .then(() => router.push('/private-page'))
    }
    return <div className="flex justify-center items-center h-screen">
        <div>
            <div className="w-96 text-center rounded-lg border border-gray-200 p-8">
                <form onSubmit={signIn} className="space-y-4">
                    <h1 className="text-4xl font-bold">Log in</h1>
                    <TextInput label="Email" id="email"/>
                    <TextInput label="Password" type="password" id="password"/>
                    <div className="text-right pt-4">
                        <Button variant="light" className="mr-2" sizes="lg" color="primary">Forgot password</Button>
                        <Button variant="filled" sizes="lg" color="primary" type="submit">Log in</Button>
                    </div>
                </form>
            </div>
            <div className="text-sm text-center mt-4">
                🛠 Customize this page at <span className="inlineCode">/pages/auth/signin.tsx</span>
            </div>
        </div>
    </div>

}

export default SignIn