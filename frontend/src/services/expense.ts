import appWriteConfig from "@/config/appwrite.config";
import { databases } from "@/lib/appwrite";
import { ID, Query } from "appwrite";

const {dbId, expenseCollectionId} = appWriteConfig;

interface IExpense {
    expenseType: string,
    expenseName: string,
    amount: number,
    category: string,
    expenseDate: Date,
}

const expressService = {
    addExpense: async(expense: IExpense) => {
        return await databases.createDocument(dbId, expenseCollectionId, ID.unique(), expense)
    },

    removeExpense: async (id: string) => {
        return await databases.deleteDocument(dbId, expenseCollectionId, id)
    },

    getExpenses: async () => {
        return await databases.listDocuments(dbId, expenseCollectionId,[Query.orderDesc("$createdAt"), Query.limit(10)])
    }
}

export default expressService