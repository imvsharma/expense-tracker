import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import AddTransaction from "../AddTransaction/AddTransaction"

export const AddTransactionInDashboard = () => {
    return (
        <Card x-chunk="dashboard-01-chunk-0">

            <CardHeader className="pb-3">
                <CardTitle>Your Transactions</CardTitle>
                <CardDescription className="max-w-lg text-balance leading-relaxed">
                    Introducing Our Dynamic Orders Dashboard for Seamless
                    Management and Insightful Analysis.
                </CardDescription>
            </CardHeader>

            <CardFooter>
                <AddTransaction name="Add New Transaction" />
            </CardFooter>
            
        </Card>
    )
}