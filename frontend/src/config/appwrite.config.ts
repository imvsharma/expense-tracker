const env = import.meta.env
const appWriteConfig = {
    endpoint: env.VITE_APP_WRITE_END_POINT,
    project: env.VITE_APP_WRITE_PROJECT
}

export default appWriteConfig