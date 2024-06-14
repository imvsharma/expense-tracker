import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

import { ArrowUpRight, DollarSign} from "lucide-react";
import { RecentTransactions } from "../RecentTransactions/RecentTransactions";
import { TopSpending } from "@/components/app/TopSpending/TopSpending";
import AddTransaction from "../AddTransaction/AddTransaction";
import { useExpenses } from "@/lib/context/expense.context";
import { useEffect, useState } from "react";
import { TotalExpenses } from "../TotalExpenses/TotalExpenses";
import { TotalIncome } from "../TotalIncome/TotalIncome";

interface IDashboardProps {
  totalExpenses: number,
  totalIncome: number,
  topSpendings:[]
}

const Dashboard = ({topSpendings, totalExpenses, totalIncome}: IDashboardProps) => {
  
  return (
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
      <div className="grid gap-4 md:grid-cols-3 md:gap-8 lg:grid-cols-3">
        <Card x-chunk="dashboard-01-chunk-0">
            <CardHeader className="pb-3">
                <CardTitle>Your Transactions</CardTitle>
                <CardDescription className="max-w-lg text-balance leading-relaxed">
                    Introducing Our Dynamic Orders Dashboard for Seamless
                    Management and Insightful Analysis.
                </CardDescription>
                
            </CardHeader>
            <CardFooter>
                {/* <Button>Add New Transaction</Button> */}
                <AddTransaction name="Add New Transaction" />
            </CardFooter>
        </Card>
        <TotalIncome incomeAmount={totalIncome} />

        <TotalExpenses expenseAmount={totalExpenses} />
      </div>
        

      <TopSpending topSpendings={topSpendings} />
      
      <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
        <Card className="xl:col-span-2" x-chunk="dashboard-01-chunk-4">
        <CardHeader className="flex flex-row items-center">
              <div className="grid gap-2">
                <CardTitle>Total Expenses</CardTitle>
                <CardDescription>
                  Recent transactions.
                </CardDescription>
              </div>
              <Button asChild size="sm" className="ml-auto gap-1">
                <a href="#">
                  View All
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </Button>
            </CardHeader>
        </Card>
        <RecentTransactions />
      </div>
    </main>

    
  );
};

export default Dashboard;
