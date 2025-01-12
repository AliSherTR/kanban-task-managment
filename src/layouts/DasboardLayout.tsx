import { Outlet } from 'react-router-dom'
import {
    Sidebar,
    SidebarFooter,
    SidebarHeader,
    SidebarProvider,
} from "@/components/ui/sidebar"
import DasboardSidebar from '@/components/dashboard-sidebar'
import DashboardHeader from '@/components/dasboard-header'
import ThemeToggle from '@/components/theme-toggle'

export default function DasboardLayout() {
    return (
        <SidebarProvider >
            <div className="flex h-screen w-full overflow-hidden">
                <Sidebar className="dark:bg-[#2b2c37] dark:border-[#2b2c37] bg-white">
                    <SidebarHeader className="p-4">
                        <h1 className="text-4xl font-bold dark:text-white mb-5 mt-2">Kanban</h1>
                    </SidebarHeader>

                    <DasboardSidebar />
                    <SidebarFooter className="p-4 mt-auto">
                        <ThemeToggle />
                    </SidebarFooter>
                </Sidebar>
                <div className="flex-1">
                    <DashboardHeader />
                    <main className="min-h-[200vh] h-[200vh] p-4 overflow-auto dark:bg-[#20212c] bg-[#f4f7fd]">
                        <Outlet />
                    </main>
                </div>
            </div>
        </SidebarProvider>
    )
}

