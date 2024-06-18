import { expenseService } from "@/services/expense";
import {useMutation, useQuery} from "@tanstack/react-query";

export const useFetchExpenses = () => {
    return useQuery({
        queryKey: ['get-expenses'],
        queryFn: expenseService.getExpenses,
        staleTime: 3000
    })
}

export const useAddExpense = () => {
    return useMutation({
        mutationFn: expenseService.addExpense
    })
}