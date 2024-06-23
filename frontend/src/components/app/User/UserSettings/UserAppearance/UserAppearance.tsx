import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { zodResolver } from "@hookform/resolvers/zod";
import { RadioGroup } from "@/components/ui/radio-group";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";

const themeFormSchema = z.object({
  theme: z.enum(["light", "dark", "system"]),
});

export const UserAppearance = () => {
  const form = useForm<z.infer<typeof themeFormSchema>>({
    resolver: zodResolver(themeFormSchema),
    defaultValues: {
      theme: "dark",
    },
  });

  const onSubmitHandler = (values: z.infer<typeof themeFormSchema>) => {
    console.log(values);
  };

  return (
    <div>
      <h1 className="text-xl font-semibold"> Appearance </h1>
      <p className="mt-2 text-muted-foreground text-sm font-roboto font-medium">
        Customize the appearance of the app. Automatically switch between day
        and night themes.
      </p>
      <Separator className="my-4" />

      <Form {...form}>
        <form
          className="space-y-8"
          onSubmit={form.handleSubmit(onSubmitHandler)}
        >
            <FormField
          control={form.control}
          name="theme"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>Theme</FormLabel>
              <FormDescription>Select the theme for application</FormDescription>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="light" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      Light
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="dark" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      Dark
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="system" />
                    </FormControl>
                    <FormLabel className="font-normal">System</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit"> Update Appearance</Button>
        </form>
      </Form>
    </div>
  );
};
