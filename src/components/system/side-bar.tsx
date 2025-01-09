import {Button} from "@/components/ui/button";
import {FileChartColumnIncreasing} from "lucide-react";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import {cn} from "@/lib/utils";
import {useState} from "react";

export default function SideBar() {

    const [stateSubBar, setStateSubBar] = useState<boolean>(false);

    return (
        <>
            <div className="h-full flex sticky">
                <nav className="w-[65px] bg-[var(--primary)] h-full flex-col flex items-center py-5 gap-4 z-20">
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button onClick={() => setStateSubBar(!stateSubBar)}
                                        className={"active:scale-90 transition-all duration-200 relative"}>
                                    <FileChartColumnIncreasing/>
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent side={"right"}>
                                <p>Relatório</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </nav>
                <nav
                    className={cn("bg-[var(--secondary)] px-5 transition-all duration-500 h-full flex-col flex items-center py-5 gap-4 absolute -left-[250px] z-10", stateSubBar && "left-[65px]")}>
                    <Button>
                        Configuração forma de pagamento
                    </Button>
                </nav>
            </div>
        </>
    )
}