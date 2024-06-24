import { Separator } from "@/components/ui/separator";
import { Link, Outlet } from "@tanstack/react-router";

export const UserSettings = () => {
  return (
    <div className="pt-10 w-3/4 ml-auto mr-auto">
      <h1 className="text-3xl font-roboto font-bold px-4">
        Settings
      </h1>
      <div className="mt-2 text-muted-foreground text-base font-roboto font-medium px-4">
        Manage your account settings.
      </div>
      <Separator className="my-4" />
      <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
        <aside className="-mx-4 px-4 lg:w-1/5">
        <nav className="flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1">
            <Link
              to="/user/settings/profile"
              className="inline-flex items-center justify-start whitespace-nowrap rounded-md  text-sm  font-medium h-9 px-4 py-2 transition-colors"
              activeProps={{ className: "outline-none ring-0 ring-ring bg-muted" }}
            >
              Profile
            </Link>
            <Link
              to="/user/settings/account"
              className="inline-flex items-center whitespace-nowrap rounded-md text-sm  font-medium h-9 px-4 py-2 transition-colors focus-visible:ring-1 focus-visible:outline-none focus-visible: ring-ring"
              activeProps={{ className: "outline-none ring-0 ring-ring bg-muted" }}
            >
              Account
            </Link>
            <Link
              to="/user/settings/appearance"
              className="inline-flex items-center whitespace-nowrap rounded-md text-sm  font-medium h-9 px-4 py-2 transition-colors focus-visible:ring-1 focus-visible:outline-none focus-visible: ring-ring"
              activeProps={{ className: "outline-none ring-0 ring-ring bg-muted" }}
            >
              Appearance
            </Link>
          </nav>
        </aside>
          
        <div className="w-full h-full lg:w-3/4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
