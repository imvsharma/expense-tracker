import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users } from "lucide-react";

interface ITotalExpensesProps {
    expenseAmount: number,
}

export const TotalExpenses = ({expenseAmount}: ITotalExpensesProps) => {
    return (
        <Card x-chunk="dashboard-total-expenses">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle>Total Expenses</CardTitle>
            <Users className="h-6 w-6 text-muted-foreground" />
          </CardHeader>
          <CardContent className="mt-4">
            <div className="text-3xl font-bold">$ {expenseAmount}</div>
            {/* <p className="text-xs text-muted-foreground">
                +180.1% from last month
            </p> */}
          </CardContent>
        </Card>
    )
}