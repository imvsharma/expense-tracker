import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import useBoundStore from "@/store/store";
import { Models } from "appwrite";
import { ShoppingBag, Home, Soup, Plane, HeartPulse } from "lucide-react";
import { useEffect, useState } from "react";

interface ITopSpendings {
  expenses: Models.Document[];
}

export const TopSpending = () => {
	const {expenses} = useBoundStore()
  const [topSpendings, setTopSpendings] = useState<[]>([]);

  const topSpendingByCategory = (expenses: any) => {
    const topSpending: any = [];
    expenses.forEach((item: any) => {
      if (item.expenseType === "expense") {
        let expense: any = {};
        if (
          topSpending.length === 0 ||
          topSpending.findIndex(
            (sItem: any) => sItem.category === item.category
          ) === -1
        ) {
          expense["category"] = item.category;
          expense["amount"] = item.amount;
          topSpending.push(expense);
        } else {
          let index = topSpending.findIndex(
            (sItem: any) => sItem.category === item.category
          );
          topSpending[index]["amount"] =
            topSpending[index]["amount"] + item.amount;
        }
      }
    });
    setTopSpendings(topSpending);
  };

  useEffect(() => {
	topSpendingByCategory(expenses)
  },[])

  const categoryIconList = [
    {
      categoryTitle: "Shopping",
      icon: (
        <ShoppingBag key="shopping" className="h-4 w-4 text-muted-foreground"></ShoppingBag>
      ),
    },
    {
      categoryTitle: "Rent",
      icon: <Home key="rent" className="h-4 w-4 text-muted-foreground"></Home>,
    },
    {
      categoryTitle: "Food",
      icon: <Soup key="food" className="h-4 w-4 text-muted-foreground"></Soup>,
    },
    {
      categoryTitle: "Travel",
      icon: <Plane key="travel" className="h-4 w-4 text-muted-foreground"></Plane>,
    },
    {
      categoryTitle: "Health",
      icon: <HeartPulse key="health" className="h-4 w-4 text-muted-foreground"></HeartPulse>,
    },
  ];

  const titleCase = (str: string) => {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  };
  return (
    <Card className="text-3xl">
      <CardHeader>
        <CardTitle>Top Spendings</CardTitle>
      </CardHeader>

      <CardContent className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
        {topSpendings && topSpendings.map((spendingItem: any) => (
            <Card key={spendingItem.category} x-chunk={spendingItem.category}>
				<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
					<CardTitle className="text-lg">
						{titleCase(spendingItem.category)}
					</CardTitle>

					{categoryIconList && categoryIconList.map((iconItem) => {
						if ( iconItem.categoryTitle === titleCase(spendingItem.category) ) {
							return iconItem.icon;
						}
					})}
				</CardHeader>

              <CardContent className="mt-4">
                <div className="text-3xl font-bold">
                  $ {spendingItem.amount}
                </div>
                {/* <p className="text-xs text-muted-foreground">
              +{spendingItem.changePercentage} from last month
            </p> */}
              </CardContent>
            </Card>
          ))}
      </CardContent>
    </Card>
  );
};
