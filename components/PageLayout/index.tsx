import {ReactElement, useContext, useEffect} from "react";
import SessionContext from "../../util/SessionContext";
import Button from "../forms/Button";
import {useRouter} from "next/router";
import fb from "../../util/firebase-config";
import Head from "next/head";

interface Props {
    children: ReactElement;
    privateRoute?: boolean;
    redirectPath?: string;
    content?: any
    title: string;
}

const RedirectHome = () => {
    const router = useRouter()

    useEffect(() => {
        router.push('/')
    }, [])

    return <></>
}

const PageLayout: React.FC<Props> = ({children, privateRoute, title, redirectPath}) => {

    const router = useRouter()
    const {isAuthenticated, userProfile} = useContext(SessionContext)

    if (privateRoute && !isAuthenticated) return <RedirectHome/>

    function signOut() {
        fb.auth().signOut()
            .then(() => router.push('/'))
    }


    return <div>
        <Head>
            <title>
                {title}
            </title>
        </Head>
        <div className="fixed w-full">
            <div className="h-1 bg-gradient-to-r from-teal-400 to-blue-600"/>
            <div className="flex justify-between p-3 shadow-md items-center bg-white">
                <a href="https://github.com/nthnluu/no-bs-next"
                   className="flex justify-between items-center text-lg font-semibold focus:underline truncate">
                    <img
                        className="h-8 mr-1.5"
                        src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"/>
                    nthnluu/no-bs-next
                </a>
                <div className="items-center">
                    {isAuthenticated ? <Button sizes="lg" variant="filled" onClick={signOut}>Sign out</Button> :
                        <span className="space-x-2">
                    <Button onClick={() => router.push('/auth/signin')} sizes="lg" variant="light">Log in</Button>
                    <Button onClick={() => router.push('/auth/signup')} sizes="lg" variant="filled">Sign up</Button>
                </span>}
                </div>

            </div>
        </div>

        {children}
    </div>


}

export default PageLayout