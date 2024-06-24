import { CircleUser, HandCoins, Menu, Package2, Search } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useUser } from "@/lib/context/user.context";
import AddTransaction from "./AddTransaction/AddTransaction";
import { Link, redirect, useNavigate } from "@tanstack/react-router";
import { useUserLogout } from "@/hooks/useUser";

const Header = () => {
  const navigate = useNavigate()
  const {mutate: logout} = useUserLogout()
  const logoutHandler = () => {
    logout()
  }
  return (
    <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <nav className="hidden flex-col gap-6 text-lg font-medium font-roboto md:flex md:flex-row md:items-center md:gap-5 md:text-base md:font-semibold lg:gap-6">
          <Link
            to="/"
            className="flex items-center gap-2 text-lg font-semibold md:text-base"
          >
            <HandCoins className="h-6 w-6" />
            <span className="sr-only">Acme Inc</span>
          </Link>
          <Link
            to={"/dashboard"}
            className="text-muted-foreground transition-colors hover:text-foreground"
            activeProps={{
              className: 'font-bold text-white',
            }}
          >
            Dashboard
          </Link>
          {/* <Link
            
            className="text-muted-foreground transition-colors hover:text-foreground"
            activeProps={{className: "text-foreground"}}
          >
            Expenses
          </Link>
          <Link
            
            className="text-muted-foreground transition-colors hover:text-foreground "
            activeProps={{className: "text-foreground"}}
          >
            Statistics
          </Link>
          <Link
            href="#"
            className="text-muted-foreground transition-colors hover:text-foreground "
            activeProps={{className: "text-foreground"}}
          >
            Goals
          </Link> */}
          <Link
            to="/user/settings/profile"
            className="text-muted-foreground transition-colors hover:text-foreground active:text-foreground"
            activeProps={{
              className: 'font-bold text-black dark:text-white',
            }}
          >
            Settings
          </Link>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-medium">
              <a
                href="#"
                className="flex items-center gap-2 text-lg font-semibold"
              >
                <HandCoins className="h-6 w-6" />
                <span className="sr-only">Acme Inc</span>
              </a>
              <a
                href="#"
                className="text-muted-foreground font-poppins hover:text-foreground"
              >
                Dashboard
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Orders
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Products
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Customers
              </a>
              <a href="#" className="hover:text-foreground font-poppins">
                Settings
              </a>
            </nav>
          </SheetContent>
        </Sheet>
        <div className="ml-auto flex">
          {/* <Button size="default" className="mt-0 mr-5 text-sm font-poppins font-semibold">Add Transaction</Button> */}
          <AddTransaction name="Add New Transaction"/>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" >
              <DropdownMenuItem>Account Information</DropdownMenuItem>
              <DropdownMenuItem onClick={() => navigate({to: '/user/changepassword'})}>Change Password</DropdownMenuItem>
              <DropdownMenuItem>Export Data</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Data and Privacy</DropdownMenuItem>
              <DropdownMenuItem>Help and Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={logoutHandler}>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          </div>
          
        
      </header>
  );
};

export default Header;
