import { Separator } from "@/components/ui/separator"

export const UserAppearance = () => {
    return (
        <div>
            <h1 className="text-xl font-semibold"> Appearance </h1>
            <p className="mt-2 text-muted-foreground text-sm font-roboto font-medium">Customize the appearance of the app. Automatically switch between day and night themes.</p>
            <Separator className="my-4" />
        </div>
    )
}