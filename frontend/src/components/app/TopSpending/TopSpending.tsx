import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ShoppingBag, Home, Soup, Plane, HeartPulse } from "lucide-react";

interface ITopSpendings {
  topSpendings: []
}

export const TopSpending = ({topSpendings}: ITopSpendings) => {
  console.log("topSpending component");
  console.log(topSpendings)

    const categoryIconList = [
      {
        categoryTitle: "Shopping",
        icon: <ShoppingBag className="h-4 w-4 text-muted-foreground"></ShoppingBag>
      },
      {
        categoryTitle: "Rent",
        icon:<Home className="h-4 w-4 text-muted-foreground"></Home>
      },
      {
        categoryTitle: "Food",
        icon: <Soup className="h-4 w-4 text-muted-foreground"></Soup>
      },
      {
        categoryTitle: "Travel",
        icon: <Plane className="h-4 w-4 text-muted-foreground"></Plane>
      },
      {
        categoryTitle: "Health",
        icon: <HeartPulse className="h-4 w-4 text-muted-foreground"></HeartPulse>
      },
    ]

    const titleCase = (str: string) => {
      return str.replace(/\w\S*/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      });
    }
  return (
    <Card className="text-3xl">

      <CardHeader>
        <CardTitle>Top Spendings</CardTitle>
      </CardHeader>

      <CardContent className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">

        {topSpendings && topSpendings.map((spendingItem: any) => (

          <Card key={spendingItem.category} x-chunk={spendingItem.category}>

          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg">{titleCase(spendingItem.category)}</CardTitle>

            {categoryIconList && categoryIconList.map(iconItem => {
              if (iconItem.categoryTitle === titleCase(spendingItem.category)) {
                return (
                  iconItem.icon
                )
              }
            })}
            
          </CardHeader>

          <CardContent className="mt-4">
            <div className="text-3xl font-bold">$ {spendingItem.amount}</div>
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
