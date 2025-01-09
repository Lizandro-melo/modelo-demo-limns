import Image from "next/image";
import {Bell, Mails} from "lucide-react";
import {Button} from "@/components/ui/button";

export default function Header() {
    return (
        <header className="bg-[var(--primary)] w-full h-[65px] flex justify-between px-10 items-center shadow-lg  z-40">
            <div>
                <Image src={""} alt={""} width={250} height={50}/>
            </div>
            <div className="flex items-center gap-8">
                <Button className={"after:content-['0'] after:w-5 after:h-5 after:font-bold after:-right-2 after:bg-red-600 after:absolute after:-top-1 active:scale-90 transition-all duration-200 after:rounded-full relative after:text-white"}>
                    <Mails/>
                </Button>
                <Button className={"after:content-['0'] after:w-5 after:h-5 after:font-bold after:-right-2 after:bg-red-600 after:absolute after:-top-1 active:scale-90 transition-all duration-200 after:rounded-full relative after:text-white"}>
                    <Bell/>
                </Button>
                <span className="text-sm">
                    Primeiro nome - cargo
                </span>
                <Button className={"active:scale-90 transition-all duration-200 relative"}>
                    Sair
                </Button>
            </div>
        </header>
    )
}