import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
Button

export const ExpenseChart = () => {
  return (
    <Card className="xl:col-span-2" x-chunk="dashboard-01-chunk-4">
        <CardHeader className="flex flex-row items-center">
            <div className="grid gap-2">
            <CardTitle>Total Expenses</CardTitle>
            <CardDescription>Recent transactions.</CardDescription>
            </div>
            <Button asChild size="sm" className="ml-auto gap-1">
                <a href="#">
                    View All
                    <ArrowUpRight className="h-4 w-4" />
                </a>
            </Button>
        </CardHeader>
    </Card>
  );
};
