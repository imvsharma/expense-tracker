
import { expenseService } from "@/services/expense";
import { Models } from "appwrite";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface IExpense extends Models.Document {
  expenseType: string;
  expenseName: string;
  amount: number;
  category: string;
  expenseDate: Date | null;
}

interface IExpenseInput {
  expenseType: string;
  expenseName: string;
  amount: number;
  category: string;
  expenseDate: Date | null;
}

export interface IExpenseContext {
    loading: boolean;
    current: IExpense[] | Models.Document[] | null;
    addExpense: (expense: IExpenseInput) => Promise<void>;
    removeExpense: (id: string) => Promise<void>;
}

interface IExpenseProviderProps {
  children: ReactNode;
}

const ExpenseContext = createContext<IExpenseContext | undefined>(undefined);

export const ExpenseProvider = ({
  children,
  ...props
}: IExpenseProviderProps) => {
  const [expense, setExpense] = useState<IExpense[] | Models.Document[]>([]);
  const [loading, setLoading] = useState(false);

  const addExpense = async (expense: IExpenseInput) => {
    setLoading(true);
    const response = await expenseService.addExpense(expense);
    setLoading(false);
    setExpense((expense) => [response, ...expense]);
  };

  const removeExpense = async (id: string) => {
    setLoading(true);
    await expenseService.removeExpense(id);
    setExpense((expenses) => expenses.filter((expense) => expense.id !== id));
    await getExpenses();
    setLoading(false);
  };

  const getExpenses = async () => {
    setLoading(true);
    const response = await expenseService.getExpenses();
    setExpense(response.documents);
    setLoading(false);
  };

  useEffect(() => {
    getExpenses();
  }, []);

  const value: IExpenseContext = {
    loading: loading,
    current: expense,
    addExpense,
    removeExpense,
  };

  return (
    <ExpenseContext.Provider value={value} {...props}>
      {children}
    </ExpenseContext.Provider>
  );
};

export const useExpenses = () => {
  const context = useContext(ExpenseContext);

  if (context === undefined)
    throw new Error("useExpenses must be used within a expenseProvider");

  return context;
};
