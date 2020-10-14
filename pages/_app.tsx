import type {AppProps} from 'next/app'
import '../styles/tailwind.css'
import {useEffect, useState} from "react";
import fb from "../util/firebase-config";
import SessionContext from "../util/hooks/SessionContext";

function MyApp({Component, pageProps}: AppProps) {

    const [sessionLoaded, toggleSessionLoaded] = useState(false)
    const [isAuthenticated, toggleAuthenticated] = useState(false)
    const [userProfile, setUserProfile] = useState(undefined)

    useEffect(() => {
        fb.auth().onAuthStateChanged((user) => {
            if (user) {
                // User is signed in.
                setUserProfile(user)
                toggleAuthenticated(true)
                toggleSessionLoaded(true)
            } else {
                // User is signed out.
                toggleAuthenticated(false)
                toggleSessionLoaded(true)
            }
        });
    }, [])

    // Waits until the session is loaded before loading the page
    if (!sessionLoaded) return null

    return (<SessionContext.Provider value={{isAuthenticated, userProfile}}>
        <Component {...pageProps} />
    </SessionContext.Provider>)
}

export default MyApp
