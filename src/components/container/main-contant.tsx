import Header from "@/components/system/header";
import {JSX} from "react";
import SideBar from "@/components/system/side-bar";

export default function MainContant({children}: { children: JSX.Element }) {
    return (
        <>
            <Header/>
            <main className="w-full flex h-full">
                <SideBar/>
                {children}
            </main>
        </>
    )
}