import TextInput from "../../components/forms/TextInput";
import React, {useState} from "react";
import Button from "../../components/forms/Button";
import fb from "../../util/firebase-config";
import {useRouter} from "next/router";

const SignIn = () => {
    const router = useRouter()

    const {status} = router.query
    const [loading, toggleLoading] = useState(false)
    const [error, setError] = useState("")

    function signIn(event) {
        event.preventDefault()

        const email = event.target.email.value
        const password = event.target.password.value
        toggleLoading(true)

        fb.auth().signInWithEmailAndPassword(email, password)
            .then(() => router.push('/private-page'))
            .catch((error) => {
                setError(error.message)
                toggleLoading(false)
            });

    }

    return <div className="flex justify-center items-center h-screen">
        <div>
            <div className="w-96 text-center rounded-lg border border-gray-200 p-8">
                <form onSubmit={signIn} className="space-y-4">
                    <h1 className="text-4xl font-bold">Log in</h1>
                    <TextInput label="Email" id="email" required error={error.length > 0} disabled={loading}/>
                    <TextInput label="Password" type="password" id="password" required error={error.length > 0}
                               disabled={loading}
                               helperText={error}/>
                               <p className="text-md text-left font-semibold text-green-500">{status && "Check your email for a link to reset your password."}</p>
                    <div className="text-right pt-4">
                        <Button variant="light"
                                onClick={() => router.push('/auth/forgot')}
                                className="mr-2" sizes="lg" color="primary">Forgot password</Button>
                        <Button variant="filled" sizes="lg" color="primary" type="submit"
                                disabled={loading} loading={loading}>Log in</Button>
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