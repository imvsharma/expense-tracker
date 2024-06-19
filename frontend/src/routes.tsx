// import { createBrowserRouter } from "react-router-dom";
// import PrivateRoute from "@/components/app/PrivateRoute";
// import HomePage from "@/pages/Home/HomePage";
// import DashboardPage from "@/pages/Home/Dashboard/DashboardPage";
// import LoginPage from "@/pages/Login/Login";
// import SignupPage from "@/pages/Signup/Signup";

// export const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <PrivateRoute />,
//       children: [
//         {
//           path: "/",
//           element: <HomePage />,
//           children: [
//             {
//               path: "/",
//               element: <DashboardPage />,
//             },
//           ],
//         },
//       ],
//     },
//     {
//       path: "login",
//       element: <LoginPage />,
//     },
//     {
//       path: "signup",
//       element: <SignupPage />,
//     },
//   ]);


// import { createRootRoute, createRoute, createRouter } from '@tanstack/react-router';
// import LoginPage from './pages/Login/Login';
// import SignupPage from './pages/Signup/Signup';
// import { useIsUserLoggedIn } from './hooks/useUser';
// import { AuthService } from './services/auth.service';
// import HomePage from './pages/Home/HomePage';

// const rootRoute = createRootRoute()

// const indexRoute = createRoute({
//   getParentRoute: () => rootRoute,
//   path: '/',
//   component: HomePage,
  
// })

// const LoginRoute = createRoute({
//   getParentRoute: () => rootRoute,
//   path: '/login',
//   component: LoginPage
  
// })

// const SignupRoute = createRoute({
//   getParentRoute: () => rootRoute,
//   path: '/signup',
//   component: SignupPage
  
// })

// const routeTree = rootRoute.addChildren([LoginRoute, SignupRoute, indexRoute]);

// export const router = createRouter({routeTree, defaultPreload: 'intent'})

