const env = import.meta.env
const appWriteConfig = {
    endpoint: env.VITE_APP_WRITE_END_POINT,
    project: env.VITE_APP_WRITE_PROJECT,
    dbId: env.VITE_APP_WRITE_DB_ID,
    expenseCollectionId: env.VITE_APP_WRITE_EXPENSE_COLLECTION_ID
}

export default appWriteConfig