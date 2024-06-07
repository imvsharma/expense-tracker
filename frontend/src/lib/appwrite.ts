import appWriteConfig from "@/config/appwrite.config";
import { Databases, Account, Client } from "appwrite";


const client: Client = new Client();
console.log(appWriteConfig)

client.setEndpoint(appWriteConfig.endpoint).setProject(appWriteConfig.project)

export const account: Account = new Account(client);
export const databases: Databases = new Databases(client)
