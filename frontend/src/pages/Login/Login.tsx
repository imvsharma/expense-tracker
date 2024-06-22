import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useLogin } from "@/hooks/useUser";
import { Navigate } from "@tanstack/react-router";
// import { useUser } from "@/lib/context/user.context";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

//Step 1 Form Handling:  create type for form input

type ILoginInputs = {
  email: string
  password: string
}


const LoginPage = () => {
  const {mutate: login} = useLogin()
  const {register, handleSubmit, formState:{isDirty, isValid}} = useForm<ILoginInputs>();

  const loginHandler: SubmitHandler<ILoginInputs> = async (data: ILoginInputs) => {
    const {email, password} = data
    toast("User Login in-process")
    login({email, password})
    toast.dismiss()
    
  }
  return (
    <div className='flex justify-center items-center h-screen '>
      <Card className="p-2">
        <CardHeader>
          <CardTitle className="text-3xl pb-5">Login</CardTitle>
          <CardDescription className="text-md font-medium">
            Enter your email below to login your account.
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit(loginHandler)}>
          <CardContent className="grid gap-8">
            <div className="grid gap-2">
              <Label htmlFor="email" className="mb-2">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email address"
                {...register('email', {required: true})}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password" className="mb-2">Password</Label>
              <Input id="password" type="password" placeholder="Enter your password" {...register('password', {required: true, min:8})} />
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" disabled={!isDirty || !isValid} className="w-full">Sign in</Button>
          </CardFooter>
        </form>
        <CardFooter>
          <Button variant="outline" className="w-full">Login with Google</Button>
        </CardFooter>
        <CardFooter className="justify-center">
        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?{" "}
          <a href="#" className="underline">
            Sign up
          </a>
        </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default LoginPage;
