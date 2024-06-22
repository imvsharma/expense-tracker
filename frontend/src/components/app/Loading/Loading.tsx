import { Spinner } from "@/components/ui/spinner"

export const Loading = () => {
    

    return (
        <div style={{position: "absolute", top:0, bottom:0, right:0, left:0, backgroundColor: "#000000d9", zIndex: 2}} className="flex justify-center items-center">
            <div className="flex items-center gap-3">
                <Spinner size="large" />
            </div>
        </div>
    )
}