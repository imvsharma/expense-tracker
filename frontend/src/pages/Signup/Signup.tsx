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
import { useSignup } from "@/hooks/useUser";
import { zodResolver } from "@hookform/resolvers/zod";
import { register } from "module";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import { isDirty, isValid, z } from "zod";

const SignupFormSchema = z
  .object({
    name: z
      .string({
        required_error: "Please enter your name",
      })
      .min(3, {
        message: "Please enter your name",
      }),
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

const SignupPage = () => {
  const { mutate: signup } = useSignup();
  const form = useForm<z.infer<typeof SignupFormSchema>>({
    resolver: zodResolver(SignupFormSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
    mode: "onBlur",
  });

  const signupHandler = async (data: z.infer<typeof SignupFormSchema>) => {
    const { email, password, name } = data;
    toast("User Signup in-process");
    signup({ email: email, password: password, name: name });
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="p-2">
        <CardHeader>
          <CardTitle className="text-3xl pb-5">Signup</CardTitle>
          <CardDescription className="text-md font-medium">
            Enter your details below to create your account.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-8">
          <Form {...form}>
            <form
              className="space-y-8"
              onSubmit={form.handleSubmit(signupHandler)}
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Enter your name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

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
              <Button type="submit" className="w-full">
                Sign up
              </Button>
            </form>
          </Form>
        </CardContent>

        <CardFooter className="flex flex-col justify-center">
          <Button variant="outline" className="w-full">
            Signup with Google
          </Button>
          <div className="mt-6 text-center text-sm">
            Already have an account{" "}
            <a href="#" className="underline">
              Log in
            </a>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SignupPage;
