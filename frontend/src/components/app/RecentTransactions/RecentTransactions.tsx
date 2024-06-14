import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const RecentTransactions = () => {
  const recentTransactions = [
    {
      username: "Olivia Martin",
      email: "olivia.martin@email.com",
      transactionName: "June month rent",
      transactionAmount: "$1,999.00",
      date: "June 6th 2024",
    },
    {
      username: "Olivia Martin",
      email: "olivia.martin@email.com",
      transactionName: "June month rent",
      transactionAmount: "$1,999.00",
      date: "June 6th 2024",
    },
    {
      username: "Olivia Martin",
      email: "olivia.martin@email.com",
      transactionName: "June month rent",
      transactionAmount: "$1,999.00",
      date: "June 6th 2024",
    },
    {
      username: "Olivia Martin",
      email: "olivia.martin@email.com",
      transactionName: "June month rent",
      transactionAmount: "$1,999.00",
      date: "June 6th 2024",
    },
    {
      username: "Olivia Martin",
      email: "olivia.martin@email.com",
      transactionName: "June month rent",
      transactionAmount: "$1,999.00",
      date: "June 6th 2024",
    },
  ];
  return (
    <Card x-chunk="dashboard-01-chunk-5">
      <CardHeader>
        <CardTitle>Recent Transactions</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-8">
        {recentTransactions &&
          recentTransactions.map((transaction, index) => (
            <>
              <div key={index+1} className="flex items-center gap-4">
                <div className="grid">
                  <p className="text-md font-medium leading-none">
                    {transaction.transactionName}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {transaction.date}
                  </p>
                </div>
                <div className="ml-auto font-medium">
                  {transaction.transactionAmount}
                </div>
              </div>
              {recentTransactions.length - 1 !== index && (
                <Separator className="my-px" />
              )}
            </>
          ))}
      </CardContent>
    </Card>
  );
};
