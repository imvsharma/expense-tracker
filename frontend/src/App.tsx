import { RouterProvider } from "@tanstack/react-router";
import "./App.css";
// import { RouterProvider } from "react-router-dom";

// import ThemeProvider from "./components/theme-provider";
// import UserProvider from "./lib/context/user.context";
// import { ExpenseProvider } from "./lib/context/expense.context";
// import { router } from "./routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { router } from "./routes";
import ThemeProvider from "./components/theme-provider";

const queryClient = new QueryClient();

function App() {
  return (
    // <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    //   <UserProvider>
    //     <ExpenseProvider>
    //       <RouterProvider router={router} />
    //     </ExpenseProvider>
    //   </UserProvider>
    // </ThemeProvider>

    // <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    //   <UserProvider>
    //     <QueryClientProvider client={queryClient}>
    //       <RouterProvider router={router} />
    //     </QueryClientProvider>
    //   </UserProvider>
    // </ThemeProvider>

    <>
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
			<QueryClientProvider client={queryClient}>
				<RouterProvider router={router} ></RouterProvider>
			</QueryClientProvider>
		</ThemeProvider>
		
      
    </>

  );
}

export default App;
