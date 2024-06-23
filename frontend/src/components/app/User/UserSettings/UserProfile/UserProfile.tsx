import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const userProfileFormSchema = z.object({
  username: z.string(),
  email: z.string().email({ message: "Enter a valid email address" }),
});

export const UserProfile = () => {
  const form = useForm<z.infer<typeof userProfileFormSchema>>({
    resolver: zodResolver(userProfileFormSchema),
    defaultValues: {
      username: "",
      email: "",
    },
  });

  const onSubmitHandler = (values: z.infer<typeof userProfileFormSchema>) => {
    console.log(values);
  };
  return (
    <div>
      <h1 className="text-xl font-semibold"> Profile </h1>
      <p className="mt-2 text-muted-foreground text-sm font-roboto font-medium">
        This is how your profile look like.
      </p>
      <Separator className="my-4" />

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmitHandler)}
          className="space-y-8"
        >
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input type="text" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display name. It can be your real name or
                  a pseudonym.
                </FormDescription>
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
                  <Input type="email" {...field} />
                </FormControl>
                <FormDescription>
                  You can manage verified email addresses in your email
                  settings.
                </FormDescription>
              </FormItem>
            )}
          />
          <Button type="submit">Update Profile</Button>
        </form>
      </Form>
    </div>
  );
};
