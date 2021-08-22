import { useState } from 'react'
import { useContext } from 'react'
import { useCallback } from 'react'
import { createContext } from 'react'
import { useCookies } from 'react-cookie'
import { api } from '../services/api'

interface User {
    id: string;
    name: string;
    email: string;
}

interface Credentials {
    email: string;
    password: string;
}


interface AuthContextData {
    user: User;
    signIn(credentials: Credentials): Promise<void>
    signOut(): void;
}

interface AuthState {
    token: string;
    user: User;
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider: React.FC = ({ children }) => {
    const [cookies, setCookie, removeCookie] = useCookies(['token']);

    const [data, setData] = useState<AuthState>(() => {
        const token = cookies.token

        const user = localStorage.getItem('@UFOP-Jobs:user')

        if (token && user) {
            api.defaults.headers.authorization = `Bearer ${token}`

            return { token, user: JSON.parse(user) }
        }

        return {} as AuthState;
    })

    const signIn = useCallback(async ({ email, password }) => {

        const response = await api.post('/sessions', {
            email,
            password
        })

        const { token, user } = response.data

        setCookie('token', token, { path: '/', secure: true, maxAge: 3600, sameSite: true })

        localStorage.setItem('@UFOP-Jobs:user', JSON.stringify(user))

        setData({ token, user })
    }, [setCookie])

    const signOut = useCallback(() => {
        removeCookie('token', { path: '/', secure: true, maxAge: 3600, sameSite: true })

        localStorage.removeItem('@UFOP-Jobs:user')

        setData({} as AuthState)

        alert('Você foi deslogado.')
    }, [removeCookie])

    return (
        <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth(): AuthContextData {
    const context = useContext(AuthContext)

    if (!context) {
        throw new Error('O hook useAuth deve ser utilizado junto com AuthProvider')
    }

    return context
}