import appWriteConfig from "@/config/appwrite.config";
import { databases } from "@/lib/appwrite";
import { ID, Permission, Query, Role } from "appwrite";

const {dbId, expenseCollectionId} = appWriteConfig;

interface IExpense {
    expenseType: string,
    expenseName: string,
    amount: number,
    category: string,
    expenseDate: Date | null,
    userId: string
}

export const expenseService = {
    addExpense: async(expense: IExpense) => {
        return await databases.createDocument(dbId, expenseCollectionId, ID.unique(), expense, [
            Permission.read(Role.user(expense.userId)),
            Permission.update(Role.user(expense.userId)),
            Permission.delete(Role.user(expense.userId)),
        ])
    },

    removeExpense: async (id: string) => {
        return await databases.deleteDocument(dbId, expenseCollectionId, id)
    },

    getExpenses: async () => {
        return await databases.listDocuments(dbId, expenseCollectionId,[Query.orderDesc("$createdAt"), Query.limit(10)])
    }
}

