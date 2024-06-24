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
import { useSignup } from "@/hooks/useUser";
import { SubmitHandler, useForm } from "react-hook-form";

type SignupInput = {
  name: string
  email: string
  password: string
}

const SignupPage = () => {
  const {mutate: signup} = useSignup()
  // const user = useUser();
  // const navigate = useNavigate()
  // console.log(user)
  const {
    register,
    handleSubmit,
    formState: {isDirty, isValid}
  } = useForm<SignupInput>()

  const onSubmit: SubmitHandler<SignupInput> = async (data: SignupInput) => {
    const {email, password, name} = data
    signup({email: email, password: password, name: name})
    // console.log(user);
    // await user.register(email, password, name)
    // navigate('/')
  }
  return (
    <div className='flex justify-center items-center h-screen'>
      <Card className="p-2">
        <CardHeader>
          <CardTitle className="text-3xl pb-5">Signup</CardTitle>
          <CardDescription className="text-md font-medium">
            Enter your details below to create your account.
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <CardContent className="grid gap-8">
          <div className="grid gap-2">
              <Label htmlFor="name" >Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="Enter your name"
                {...register('name', {required: true})}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email" >Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                {...register('email', {required: true})}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input 
                id="password" 
                type="password"
                {...register('password', {required: true})}
                />
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" disabled={!isDirty || !isValid} className="w-full">Sign up</Button>
          </CardFooter>
        </form>
        <CardFooter>
          <Button  variant="outline" className="w-full">Signup with Google</Button>
        </CardFooter>
        <CardFooter className="justify-center">
        <div className="mt-4 text-center text-sm">
          Already have an account {" "}
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
