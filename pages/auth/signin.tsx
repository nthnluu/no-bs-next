import TextInput from "../../components/forms/TextInput";
import React from "react";
import Button from "../../components/forms/Button";

const SignIn = () => {
    return <div className="flex justify-center items-center h-screen">
        <div className="w-96 space-y-4 text-center rounded-lg border border-gray-200 p-8">
            <h1 className="text-4xl font-bold">Log in</h1>
            <TextInput label="Email"/>
            <TextInput label="Password"/>
            <div className="text-right pt-4">
                <Button variant="light" className="mr-2" sizes="lg" color="primary">Forgot password</Button>
                <Button variant="filled" sizes="lg" color="primary">Log in</Button>
            </div>
        </div>
    </div>

}

export default SignIn