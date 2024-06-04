import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { z } from "zod";

type Expense = {
	id: number,
	title: string,
	amount: number
}

const createExpenseSchema = z.object({
	title: z.string(),
	amount: z.number()
})



const expensesRoutes = new Hono()
  .get("/", (context) => {
    const { json } = context;
    return json({ expenses: [] });
  })
  .post("/", (context) => {
		
    const { json } = context;
    return json({});
  });

export default expensesRoutes;
