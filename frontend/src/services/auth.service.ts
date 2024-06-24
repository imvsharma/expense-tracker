import { account } from "@/lib/appwrite";
import { ID, Models } from "appwrite";
import { StorageService } from "./storage.service";

interface ILogin {
    email: string,
    password: string
}

interface ISignup {
    email: string,
    password: string,
    name: string
}

interface IUpdatePassword {
    newPassword: string,
    oldPassword: string
}

const key = 'USER-DETAILS'

export const AuthService = {
    login: async ({email, password}: ILogin) => {
        const res = await account.createEmailPasswordSession(email, password);
        StorageService.set(key, JSON.stringify({userId: res['userId']}))
        return res
    },

    signup: async ({email, password, name}: ISignup) => {
        const res = await account.create(ID.unique(), email, password, name);
        console.log(res)
        return res
    },

    logout: async () => {
        const deleteRes = await account.deleteSession("current")
        StorageService.remove(key);
        return deleteRes
    },

    changePassword: async ({newPassword, oldPassword}: IUpdatePassword) => {
        return await account.updatePassword(newPassword, oldPassword)
    },

    isUserLoggedIn: async ():  Promise<boolean> => {
        try {
            const res = await account.get();
            return true 
        } catch (error) {
            console.log(error)
            return false
        }
        
    } 
}