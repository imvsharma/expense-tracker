import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowUpRight, DollarSign, Home, Plane, ShoppingBag, Soup, Users } from "lucide-react";

const Dashboard = () => {
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
                <Button>Add New Transaction</Button>
            </CardFooter>
        </Card>
        <Card x-chunk="dashboard-01-chunk-1">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle >Total Income</CardTitle>
            <DollarSign className="h-6 w-6 text-muted-foreground" />
          </CardHeader>
          <CardContent className="mt-4">
            <div className="text-3xl font-bold">$45,231.89</div>
            <p className="text-xs text-muted-foreground">
              +20.1% from last month
            </p>
          </CardContent>
        </Card>

        <Card x-chunk="dashboard-01-chunk-2">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle>Total Expenses</CardTitle>
            <Users className="h-6 w-6 text-muted-foreground" />
          </CardHeader>
          <CardContent className="mt-4">
            <div className="text-3xl font-bold">+2350</div>
            <p className="text-xs text-muted-foreground">
                +180.1% from last month
            </p>
          </CardContent>
        </Card>
      </div>
        <Card className="text-3xl">
            <CardHeader>
                <CardTitle>
                    Top Spendings
                </CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
        <Card x-chunk="dashboard-01-chunk-3">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-lg">Shopping</CardTitle>
                <ShoppingBag className="h-4 w-4 text-muted-foreground"></ShoppingBag>
            </CardHeader>
            <CardContent className="mt-4">
                <div className="text-3xl font-bold">$15,231.89</div>
                <p className="text-xs text-muted-foreground">
                    +23.1% from last month
                </p>
            </CardContent>
        </Card>
        <Card x-chunk="dashboard-01-chunk-3">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-lg">Rent</CardTitle>
                <Home className="h-4 w-4 text-muted-foreground"></Home>
            </CardHeader>
            <CardContent className="mt-4">
                <div className="text-3xl font-bold">$10,231.89</div>
                <p className="text-xs text-muted-foreground">
                    +23.1% from last month
                </p>
            </CardContent>
        </Card>
        <Card x-chunk="dashboard-01-chunk-3">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-lg">Food</CardTitle>
                <Soup className="h-4 w-4 text-muted-foreground"></Soup>
            </CardHeader>
            <CardContent className="mt-4">
                <div className="text-3xl font-bold">$1,031</div>
                <p className="text-xs text-muted-foreground">
                    +23.1% from last month
                </p>
            </CardContent>
        </Card>
        <Card x-chunk="dashboard-01-chunk-3">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-lg">Travel</CardTitle>
                <Plane className="h-4 w-4 text-muted-foreground"></Plane>
            </CardHeader>
            <CardContent className="mt-4">
                <div className="text-3xl font-bold">$231.89</div>
                <p className="text-xs text-muted-foreground">
                    +23.1% from last month
                </p>
            </CardContent>
        </Card>
      </CardContent>
            
        </Card>
      
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
        <Card x-chunk="dashboard-01-chunk-5">
            <CardHeader>
              <CardTitle>Recent Transactions</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-8">
                <div className="flex items-center gap-4">
                
                <div className="grid gap-1">
                  <p className="text-sm font-medium leading-none">
                    Olivia Martin
                  </p>
                  <p className="text-sm text-muted-foreground">
                    olivia.martin@email.com
                  </p>
                </div>
                <div className="ml-auto font-medium">+$1,999.00</div>
                </div>
                <Separator className="my-0.5" />
                <div className="flex items-center gap-4">
                
                <div className="grid gap-1">
                  <p className="text-sm font-medium leading-none">
                    Olivia Martin
                  </p>
                  <p className="text-sm text-muted-foreground">
                    olivia.martin@email.com
                  </p>
                </div>
                <div className="ml-auto font-medium">+$1,999.00</div>
                </div>
            </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default Dashboard;
