import React, { createContext, useContext, useEffect, useState } from 'react'
import {
	onAuthStateChanged,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
} from 'firebase/auth'
import { auth } from '../config/firebase/auth'

interface UserCtx {
	email: string,
	password: string,
	confirmPassword: string
}

const AuthContext = createContext<UserCtx | object>({})

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
	const [user, setUser] = useState<object>({})
	const [loading, setLoading] = useState<boolean>(true)

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser({
					id: user.uid,
					email: user.email,
					displayName: user.displayName,
					photoURL: user.photoURL,
				})
			} else {
				setUser({})
			}
			setLoading(false)
		})

        return () => unsubscribe()
	}, [])

    const signup = (email: string, password: string) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signin = (email: string, password: string) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = async () => {
        setUser({})
        await signOut(auth)
    }

    return (
        <AuthContext.Provider value={{user, signin, signup, logout}}>
            {loading ? null : children}
        </AuthContext.Provider>
    )
}
