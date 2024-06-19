import { useState } from "react";

import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { cn } from "@/lib/utils";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { useExpenses } from "@/lib/context/expense.context";
import { useUser } from "@/lib/context/user.context";

type AddTransactionValues = {
  expenseType: string;
  expenseName: string;
  amount: number;
  category: string;
  expenseDate: Date;
};

interface IAddTransaction {
  name: string;
}

const AddTransaction = ({ name }: IAddTransaction) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const form = useForm<AddTransactionValues>();
  const { control, handleSubmit } = form;
  // const expenses = useExpenses();
  // const user = useUser();

  const addTransactionHandler: SubmitHandler<AddTransactionValues> = (
    data: AddTransactionValues
  ) => {
    let { amount } = data;

    if (typeof amount === "string") {
      amount = parseInt(amount);
    }
    // const userId = user.current?.$id;
    // const expense = { userId: userId, ...data, amount };
    // expenses.addExpense(expense);
    setIsDialogOpen(false);
  };
  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button className="font-semibold font-roboto text-sm mx-5">
          {name}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Add Transaction</DialogTitle>
          <DialogDescription>
            Track your income and expenses. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={handleSubmit(addTransactionHandler)}>
            <div className="grid gap-4 py-4">
              <FormField
                control={control}
                name="expenseType"
                render={({ field }) => (
                  <FormItem className="grid grid-cols-3 items-center gap-4">
                    <FormLabel className="text-left">
                      Transaction Type
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="w-[270px]">
                          <SelectValue placeholder="Select transaction type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="income">Income</SelectItem>
                          <SelectItem value="expense">Expense</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />

              <FormField
                control={control}
                name="category"
                render={({ field }) => (
                  <FormItem className="grid grid-cols-3 items-center gap-4">
                    <FormLabel className="text-left">Choose Category</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="w-[270px]">
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="salary">Salary</SelectItem>
                          <SelectItem value="rent">Rent</SelectItem>
                          <SelectItem value="business">Business</SelectItem>
                          <SelectItem value="health">Health</SelectItem>
                          <SelectItem value="stocks">Stocks</SelectItem>
                          <SelectItem value="shopping">Shopping</SelectItem>
                          <SelectItem value="travel">Travel</SelectItem>
                          <SelectItem value="others">Other</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />

              <FormField
                control={control}
                name="expenseName"
                render={({ field }) => (
                  <FormItem className="grid grid-cols-3 items-center gap-4">
                    <FormLabel className="text-left">Name</FormLabel>
                    <FormControl>
                      <Input
                        className="w-[270px]"
                        type="text"
                        placeholder="Enter transaction name"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={control}
                name="amount"
                render={({ field }) => (
                  <FormItem className="grid grid-cols-3 items-center gap-4">
                    <FormLabel className="text-left">Amount</FormLabel>
                    <FormControl>
                      <Input
                        className="w-[270px]"
                        type="number"
                        placeholder="Enter transaction amount"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={control}
                name="expenseDate"
                render={({ field }) => (
                  <FormItem className="grid grid-cols-3 items-center gap-4">
                    <FormLabel className="text-left">Select Date</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-[270px] pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) =>
                            date > new Date() || date < new Date("1900-01-01")
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </FormItem>
                )}
              />
            </div>

            <DialogFooter>
              <Button type="submit">Submit</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default AddTransaction;
