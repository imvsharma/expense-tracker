
import { RecentTransactions } from "../RecentTransactions/RecentTransactions";
import { TopSpending } from "@/components/app/TopSpending/TopSpending";
import { DashboardAnalytics } from "../DashboardAnalytics/DashboardAnalytics";
import { ExpenseChart } from "../ExpenseChart/ExpenseChart";
import { useFetchExpenses } from "@/hooks/useExpenses";
import useBoundStore from "@/store/store";
import { useEffect } from "react";
import { Loading } from "../Loading/Loading";


const Dashboard = () => {
	const {expenses, getExpenses} = useBoundStore();
	const {data, isFetching, error, isFetched} = useFetchExpenses();
	
	useEffect(() => {
		console.log(data)
		if(data && data?.documents){
			getExpenses(data?.documents);
		}
	}, [data])

	
	if(isFetching) {
		return <Loading />
	}

	if(error) {
		return <div>Error</div>
	}

	if(isFetched && expenses.length > 0) {
		return (
			<main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
				<DashboardAnalytics />
				  <TopSpending />
			  
				  <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
					<ExpenseChart />
					<RecentTransactions />
				  </div>
		
			</main>
		  );
	}
  
  
};

export default Dashboard;
