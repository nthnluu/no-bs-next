import TextInput from "../../components/forms/TextInput";
import React, {useState} from "react";
import Button from "../../components/forms/Button";
import fb from "../../util/firebase-config";
import {useRouter} from "next/router";

const Forgot = () => {
    const router = useRouter()
    const [loading, toggleLoading] = useState(false)
    const [error, setError] = useState("")

    function sendResetEmail(event) {
        event.preventDefault()

        const email = event.target.email.value
        toggleLoading(true)

        fb.auth().sendPasswordResetEmail(email)
            .then(() => router.push('/auth/signin?status=reset_successful'))
            .catch((error) => {
                setError(error.message)
                toggleLoading(false)
            });

    }

    return <div className="flex justify-center items-center h-screen">
        <div>
            <div className="w-96 text-center rounded-lg border border-gray-200 p-8">
                <form onSubmit={sendResetEmail} className="space-y-4">
                    <h1 className="text-4xl font-bold">Reset password</h1>
                    <TextInput label="Email" id="email" required error={error.length > 0}
                               helperText={error}
                               disabled={loading}/>
                    <div className="text-right pt-4">
                        <Button onClick={() => router.push('/auth/signin')}
                                variant="light" className="mr-2" sizes="lg"
                                color="primary">Log in</Button>
                        <Button variant="filled" sizes="lg" color="primary" type="submit"
                                disabled={loading} loading={loading}>Continue</Button>
                    </div>
                </form>
            </div>
            <div className="text-sm text-center mt-4">
                🛠 Customize this page at <span className="inlineCode">/pages/auth/forgot.tsx</span>
            </div>
        </div>
    </div>

}

export default Forgot