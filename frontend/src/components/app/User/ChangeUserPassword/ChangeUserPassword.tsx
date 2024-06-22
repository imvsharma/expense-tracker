import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const changeUserPasswordFormSchema = z
  .object({
    currentPassword: z.string({
      required_error: "Please enter the current password",
    }).min(8),
    newPassword: z.string({ required_error: "Please enter the new password" }).min(8),
    confirmPassword: z.string({
      required_error: "Please enter the new password again",
    }).min(8),
  })
  .required()
  .superRefine(({ confirmPassword, newPassword }, ctx) => {
    if (confirmPassword !== newPassword) {
      ctx.addIssue({
        code: "custom",
        message: "New Password and Confirm Password did not match",
        path: ["confirmPassword"],
      });
    }
  });

  

export const ChangeUserPassword = () => {
  const form = useForm<z.infer<typeof changeUserPasswordFormSchema>>({
    resolver: zodResolver(changeUserPasswordFormSchema),
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  const onSubmitHandler = (
    values: z.infer<typeof changeUserPasswordFormSchema>
  ) => {
    console.log(form.formState)
    console.log(values);
  };

  return (
    <>
      <div className="flex flex-row h-[calc(100vh-64px)] justify-center items-center">
        <Card className="w-96 ">
          <CardHeader>
            <CardTitle className=" text-center">Change Password</CardTitle>
            <CardDescription className=" text-center">
              Change password for your account
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-8">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmitHandler)}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="currentPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Current Password</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="Enter your current password"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="newPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>New Password</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="Enter your new password"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Confirm New Password</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="Enter your new password again"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit"  className="w-full">Submit</Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </>
  );
};
