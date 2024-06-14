import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { DollarSign } from "lucide-react"

interface ITotalIncomeProps {
    incomeAmount: number,
}

export const TotalIncome = ({incomeAmount}: ITotalIncomeProps) => {
    return (
        <Card x-chunk="dashboard-01-chunk-1">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle >Total Income</CardTitle>
            <DollarSign className="h-6 w-6 text-muted-foreground" />
          </CardHeader>
          <CardContent className="mt-4">
            <div className="text-3xl font-bold">$ {incomeAmount}</div>
            {/* <p className="text-xs text-muted-foreground">
              +20.1% from last month
            </p> */}
          </CardContent>
        </Card>
    )
}