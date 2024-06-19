import { account } from "@/lib/appwrite";
import { ID, Models } from "appwrite";
import { StorageService } from "./storage.service";

interface ILogin {
    email: string,
    password: string
}

const key = 'USER-DETAILS'

export const AuthService = {
    login: async ({email, password}: ILogin) => {
        const res = await account.createEmailPasswordSession(email, password);
        console.log(res)
        StorageService.set(key, JSON.stringify({userId: res['userId']}))
        return res
    },

    signup: async (email: string, password: string, name: string) => {
        await account.create(ID.unique(), email, password, name);
    },

    logout: async () => {
        const deleteRes = await account.deleteSession("current")
        StorageService.remove(key);
        return deleteRes
    },

    isUserLoggedIn: async ():  Promise<Models.User<Models.Preferences>> => {
        return await account.get();
    } 
}