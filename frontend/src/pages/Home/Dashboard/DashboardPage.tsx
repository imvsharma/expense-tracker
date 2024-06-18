import Dashboard from "@/components/app/Dashboard/Dashboard";

const DashboardPage = () => {
	return (
		<div>
			<Dashboard />
		</div>
	)
}

	

  

  
  // const [topSpendings, setTopSpendings] = useState<[]>([])

  // const getExpenses = async () => {
  //   setTotalExpenses(0);
  //   setTotalIncome(0);
  //   const allExpenses = current;
  //   if(allExpenses && allExpenses.length > 0) {
  //       setTopSpendings(topSpendingByCategory(allExpenses));
  //       recentTransaction(allExpenses)
  //   }
    
  //   allExpenses?.forEach((expense) => {
  //     if (expense.expenseType === "expense") {
  //       setTotalExpenses((prev) => prev + expense.amount);
  //     } else if (expense.expenseType === "income") {
  //       setTotalIncome((prev) => prev + expense.amount);
  //     }
  //   });
  // };

  // const topSpendingByCategory= (expenses:any) => {
  //   const topSpending:any = []
  //   expenses.forEach((item: any) => {
  //       if (item.expenseType === 'expense') {
  //           let expense: any = {}
  //           if (topSpending.length === 0 || topSpending.findIndex((sItem: any) => sItem.category === item.category) === -1) {
  //               expense["category"] = item.category;
  //               expense["amount"] = item.amount;
  //               topSpending.push(expense)
  //           } else {
  //               let index = topSpending.findIndex((sItem: any) => sItem.category === item.category);
  //               topSpending[index]["amount"] = topSpending[index]["amount"]  + item.amount
  //           }
  //       }
  //   })
  //   return topSpending
  // }

  // const recentTransaction = (expenses: any) => {
  //   console.log(new Date(expenses[0].expenseDate))
  // }

  // useEffect(() => {
  //   getExpenses();
  // }, [loading]);
  // <Dashboard topSpendings={topSpendings} totalExpenses={totalExpenses} totalIncome={totalIncome} /> : <h1>Loading...</h1>;



export default DashboardPage;
