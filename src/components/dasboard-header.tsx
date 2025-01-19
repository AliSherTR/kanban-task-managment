import { Button } from "./ui/button";
import { SidebarTrigger } from "./ui/sidebar";
import { EllipsisVertical, Plus } from 'lucide-react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useParams } from "react-router-dom";

export default function DashboardHeader() {
    const { name } = useParams();
    return (
        <header className="flex w-full h-16 items-center justify-between border-b px-4 dark:text-white dark:bg-[#2b2c37] dark:border-[#2b2c37]">
            <div className="flex items-center gap-2">
                <SidebarTrigger />
                <h2 className="text-xl font-bold">{name}</h2>
            </div>
            <div className="flex items-center gap-2">
                <Button className=" bg-[#635fc7] dark:bg-[#635fc7] dark:text-white hover:bg-[#635fc7] font-semibold text-lg flex items-center justify-center rounded-3xl py-6">
                    <Plus className=" h-4 w-4" />
                    Add New Task
                </Button>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                            <EllipsisVertical />

                            <span className="sr-only">Open menu</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem>Edit Board</DropdownMenuItem>
                        <DropdownMenuItem>Delete Board</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </header>
    )
}
