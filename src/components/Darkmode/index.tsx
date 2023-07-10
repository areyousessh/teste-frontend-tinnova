import { useState } from "react";

export function ThemeToggle() {
    const [isDarkMode, setIsDarkMode] = useState(false)

    function toggleTheme() {
        setIsDarkMode(!isDarkMode);
        document.documentElement.classList.toggle('dark')
    };

    return (
        <button onClick={toggleTheme} className="bg-[#00c8b3] text-white font-bold py-2 px-4 mt-5 mb-5 ml-4 rounded-full">
            {isDarkMode ? 'Light Theme' : 'Dark Theme'}
        </button>
    )
}