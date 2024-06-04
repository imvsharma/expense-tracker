import { Hono } from 'hono';
import { logger } from 'hono/logger';
import expensesRoutes from './routes/expenses.routes';


const app = new Hono();

app.use(logger())

app.get('/', (c) => {
    const {req, res, json}=c;
    return json({message: "Response from hono"})
})

app.route('/api/expenses', expensesRoutes)

export default app