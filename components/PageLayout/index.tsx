import {ReactElement, useContext, useEffect} from "react";
import SessionContext from "../../util/hooks/SessionContext";
import Button from "../forms/Button";
import {useRouter} from "next/router";
import fb from "../../util/firebase-config";

interface Props {
    children: ReactElement;
    privateRoute?: boolean;
    redirectPath?: string;
}

const PageLayout: React.FC<Props> = ({children, privateRoute = false, redirectPath = "/"}) => {

    const router = useRouter()
    const {isAuthenticated, userProfile} = useContext(SessionContext)

    function signOut() {
        fb.auth().signOut()
            .then(() => router.push('/'))
    }

    if (privateRoute && !isAuthenticated) {
        router.push(redirectPath)
        return null
    } else {
        return <div>
            <div className="flex justify-between p-3 shadow-md items-center fixed w-full">
                <a href="https://github.com/nthnluu/no-bs-next" className="flex justify-between items-center text-lg font-semibold focus:underline">
                    <img
                        className="h-8 mr-1.5"
                        src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"/>
                    nthnluu/no-bs-next
                </a>
                {isAuthenticated ? <Button sizes="lg" variant="filled" onClick={signOut}>Sign out</Button> :
                    <span className="space-x-2">
                    <Button onClick={() => router.push('/auth/signin')} sizes="lg" variant="light">Log in</Button>
                    <Button onClick={() => router.push('/auth/signup')} sizes="lg" variant="filled">Sign up</Button>
                </span>}
            </div>
            {children}
        </div>
    }

}

export default PageLayout