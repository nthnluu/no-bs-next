import PageLayout from "../components/PageLayout";
import {useContext} from "react";
import SessionContext from "../util/hooks/SessionContext";

export default function Private() {
    const {userProfile} = useContext(SessionContext)

    return (
        <PageLayout privateRoute>
            <div className="h-screen flex justify-center items-center px-12">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-900">Authenticated succesfully 👌</h1>
                    <h2 className="text-xl text-gray-700 mt-2">
                        Only you can see this page. Edit it at
                        <span className="inlineCode">/pages/private-page.tsx</span></h2>
                    <h3 className="text-xl text-blue-500 font-semibold mt-8">Logged in as {userProfile.email}</h3>
                </div>
            </div>
        </PageLayout>
    )
}
