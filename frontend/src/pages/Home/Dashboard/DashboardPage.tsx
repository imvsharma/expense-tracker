import Dashboard from "@/components/app/Dashboard/Dashboard";
import { useExpenses } from "@/lib/context/expense.context";
import { useEffect, useState } from "react";

const DashboardPage = () => {
  const expenses = useExpenses();

  const { loading, current } = expenses;

  const [totalExpenses, setTotalExpenses] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);
  const [topSpendings, setTopSpendings] = useState<[]>([])

  const getExpenses = async () => {
    setTotalExpenses(0);
    setTotalIncome(0);
    const allExpenses = current;
    if(allExpenses && allExpenses.length > 0) {
        setTopSpendings(topSpendingByCategory(allExpenses)) 
    }
    
    allExpenses?.forEach((expense) => {
      if (expense.expenseType === "expense") {
        setTotalExpenses((prev) => prev + expense.amount);
      } else if (expense.expenseType === "income") {
        setTotalIncome((prev) => prev + expense.amount);
      }
    });
  };

  const topSpendingByCategory= (expenses:any) => {
    const topSpending:any = []
    expenses.forEach((item: any) => {
        if (item.expenseType === 'expense') {
            let expense: any = {}
            if (topSpending.length === 0 || topSpending.findIndex((sItem: any) => sItem.category === item.category) === -1) {
                expense["category"] = item.category;
                expense["amount"] = item.amount;
                topSpending.push(expense)
            } else {
                let index = topSpending.findIndex((sItem: any) => sItem.category === item.category);
                topSpending[index]["amount"] = topSpending[index]["amount"]  + item.amount
            }
        }
    })
    console.log(topSpending)
    return topSpending
  }

  useEffect(() => {
    getExpenses();
  }, [loading]);
  return loading === false ? <Dashboard topSpendings={topSpendings} totalExpenses={totalExpenses} totalIncome={totalIncome} /> : <h1>Loading...</h1>;
};

export default DashboardPage;
