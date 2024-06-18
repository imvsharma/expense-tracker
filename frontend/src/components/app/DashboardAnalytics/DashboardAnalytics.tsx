
import { AddTransactionInDashboard } from "../AddTransactionInDashboard/AddTransactionInDashboard";
import { TotalExpenses } from "../TotalExpenses/TotalExpenses";
import { TotalIncome } from "../TotalIncome/TotalIncome";
import { useEffect, useState } from "react";
import useBoundStore from "@/store/store";

export const DashboardAnalytics = () => {
    const [totalExpenses, setTotalExpenses] = useState(0);
    const [totalIncome, setTotalIncome] = useState(0);

    const {expenses} = useBoundStore()

    useEffect(() => {
        setTotalExpenses(0);
        setTotalIncome(0);
        expenses?.forEach((expense) => {
            if (expense.expenseType === "expense") {
              setTotalExpenses((prev) => prev + expense.amount);
            } else if (expense.expenseType === "income") {
              setTotalIncome((prev) => prev + expense.amount);
            }
        });
    }, [])

    
    return (
        <div className="grid gap-4 md:grid-cols-3 md:gap-8 lg:grid-cols-3">
            <AddTransactionInDashboard />
            <TotalIncome incomeAmount={totalIncome} />
            <TotalExpenses expenseAmount={totalExpenses} />
        </div>
    );
};
