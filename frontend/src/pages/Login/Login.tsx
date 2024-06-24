import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useLogin } from "@/hooks/useUser";
import useBoundStore from "@/store/store";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "@tanstack/react-router";
import { password } from "bun";
import { register } from "module";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import { isDirty, isValid, z } from "zod";

const LoginFormSchema = z
  .object({
    email: z
      .string({
        required_error: "Please enter the email address",
      })
      .email({
        message: "Please enter a valid email address",
      }),
    password: z
      .string({
        required_error: "Please enter your password",
      })
      .min(8, { message: "Password should be minimum 8 characters long." }),
  })
  .required();

type ILoginInputs = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const { getUser } = useBoundStore();
  const { mutate: login } = useLogin();
  //const {register, handleSubmit, formState:{isDirty, isValid}} = useForm<ILoginInputs>();

  const form = useForm<z.infer<typeof LoginFormSchema>>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      email: "",
      password: ""
    },
    mode: "onBlur",
  });

  const loginHandler = async (data: z.infer<typeof LoginFormSchema>) => {
    const { email, password } = data;
    toast("User Login in-process");
    login({ email, password });
    toast.dismiss();
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen ">
        <Card className="p-2">
          <CardHeader>
            <CardTitle className="text-3xl pb-2">Login</CardTitle>
            <CardDescription className="text-md font-medium">
              Enter your credentials below to login your account.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-8">
            <Form {...form}>
              <form
                className="space-y-8"
                onSubmit={form.handleSubmit(loginHandler)}
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Enter your email address"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="Enter your password"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  disabled={!isDirty || !isValid}
                  className="w-full"
                >
                  Sign in
                </Button>
              </form>
            </Form>
          </CardContent>
          <CardFooter className="flex flex-col justify-center">
            <Button variant="outline" className="w-full">
              Login with Google
            </Button>

            <div className="mt-6 text-center text-sm">
              Don&apos;t have an account?{" "}
              <Link to="/signup" className="underline">
                Sign up
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </>
  );

  
};

export default LoginPage;
