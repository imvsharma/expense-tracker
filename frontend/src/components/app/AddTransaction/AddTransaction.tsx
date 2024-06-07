import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { useState } from "react"


const AddTransaction = () => {
    const [date, setDate] = useState<Date>()
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="font-semibold font-roboto text-sm mx-5">Add Transaction</Button>
            </DialogTrigger>
            <DialogContent className=" min-w-fit sm:max-w-[425px]">
                <DialogHeader>
                <DialogTitle>Add Transaction</DialogTitle>
                <DialogDescription>
                    Track your income and expenses. Click save when you're done.
                </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-left">
                            Transaction Type
                        </Label>
                        <Select>
                            <SelectTrigger className="w-[200px]">
                                <SelectValue placeholder="Select transaction type" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem value="income">Income</SelectItem>
                                    <SelectItem value="expense">Expense</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    
                    </div>

                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-left">
                            Choose Category
                        </Label>
                        <Select>
                            <SelectTrigger className="w-[200px]">
                                <SelectValue placeholder="Select category" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem value="income">Salary</SelectItem>
                                    <SelectItem value="expense">Rent</SelectItem>
                                    <SelectItem value="income">Business</SelectItem>
                                    <SelectItem value="expense">Health</SelectItem>
                                    <SelectItem value="income">Stocks</SelectItem>
                                    <SelectItem value="expense">Shopping</SelectItem>
                                    <SelectItem value="income">Travel</SelectItem>
                                    <SelectItem value="expense">Other</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    
                    </div>

                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label className="text-left">
                            Select Date
                        </Label>
                        <Popover>
                            <PopoverTrigger asChild>
                                    <Button
                                        variant={"outline"}
                                        className={cn(
                                            "w-[280px] justify-start text-left font-normal",
                                            !date && "text-muted-foreground"
                                        )}
                                    >
                                    <CalendarIcon className="mr-2 h-4 w-4" />
                                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                                <Calendar
                                mode="single"
                                selected={date}
                                onSelect={setDate}
                                initialFocus
                                />
                            </PopoverContent>
                        </Popover>
                    </div>
                <div className="grid grid-cols-4 items-center gap-2">
                    <Label htmlFor="username" className="text-left">
                    Name
                    </Label>
                    <Input
                    id="name"
                    className="col-span-3 w-2/3"
                    />
                </div>
            </div>
                <DialogFooter>
                    <Button type="submit">Save changes</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default AddTransaction