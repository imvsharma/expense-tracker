import { Spinner } from "@/components/ui/spinner"

export const Loading = () => {
    return (
        <div className="h-screen flex justify-center items-center">
            <div className="flex items-center gap-3">
                <Spinner size="large" />
            </div>
        </div>
    )
}