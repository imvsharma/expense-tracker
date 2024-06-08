import "./App.css";
import { RouterProvider } from "react-router-dom";

import ThemeProvider from "./components/theme-provider";
import UserProvider from "./lib/context/user.context";
import { ExpenseProvider } from "./lib/context/expense.context";
import { router } from "./routes";


function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <UserProvider>
        <ExpenseProvider>
          <RouterProvider router={router} />
        </ExpenseProvider>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
