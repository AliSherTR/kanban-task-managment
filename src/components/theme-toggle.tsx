import { useTheme } from "@/context/theme-provider"
import { Moon, Sun } from "lucide-react"

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme()

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return (
        <div
            className="px-4 max-w-[70%] m-auto w-full py-2 rounded-full bg-[#f4f7fd] dark:bg-[#2b2c37] flex items-center justify-between cursor-pointer transition-colors duration-300 ease-in-out"
            onClick={toggleTheme}
        >
            <Sun className={`w-5 h-5 text-yellow-500 transition-opacity duration-300 ease-in-out ${theme === 'light' ? 'opacity-100' : 'opacity-50'}`} />
            <div className="mx-2 w-10 h-5 bg-[#635fc7] rounded-full p-1 transition-all duration-300 ease-in-out">
                <div
                    className={`bg-white w-3 h-3 rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${theme === 'dark' ? 'translate-x-5' : ''
                        }`}
                />
            </div>
            <Moon className={`w-5 h-5 text-indigo-500 transition-opacity duration-300 ease-in-out ${theme === 'dark' ? 'opacity-100' : 'opacity-50'}`} />
        </div>
    )
}