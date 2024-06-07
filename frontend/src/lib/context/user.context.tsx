import { ID, Models } from "appwrite";
import { account} from "../appwrite";
import { createContext, useContext, useEffect, useState } from "react";

type AuthState = "Pending" | "Success" | "Error"

export interface User {
    current: Models.Session | Models.User<Models.Preferences> | null;
    logout: () => Promise<void>;
    register: (email: string, password: string) => Promise<void>;
    login: (email: string, password: string) => Promise<void>,
    authState: AuthState
}

export interface UserProviderProps {
    children: React.ReactNode
}

const UserContext = createContext<User | undefined>(undefined);

const UserProvider = ({children, ...props}: UserProviderProps) => {
    const [user, setUser] = useState<Models.Session |  Models.User<Models.Preferences> |null>(null);
    const [userAuthState, setUserAuthState] = useState<AuthState>("Pending")

    const login = async (email: string, password: string) => {
        const user = await account.createEmailPasswordSession(email, password);
        setUser(user)
        setUserAuthState("Success")
    }

    const register = async (email: string, password: string) => {
        await account.create(ID.unique(), email, password);
        await login(email, password);

    }

    const logout = async () => {
        await account.deleteSession("current")
        setUser(null)
        setUserAuthState("Success")
    }
    

    const init = async () => {
        try {
            setUserAuthState("Pending")
            const loggedIn = await account.get();
            setUser(loggedIn);
            setUserAuthState("Success")
          } catch (err) {
            setUser(null);
            setUserAuthState("Error")
          }
    }

    useEffect(() => {
        init()
    },[])

    return (
        <UserContext.Provider {...props} value={{current: user, login, logout, register, authState: userAuthState}}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => {
    const context = useContext(UserContext)

    if (context === undefined) 
        throw new Error("useUser must be used within a ThemeProvider")
    
    return context
}

export default UserProvider

