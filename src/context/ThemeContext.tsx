import * as React from 'react';
import { PropsWithChildren } from 'react';
import { SunIcon } from '@/components/icons/SunIcon';
import { MoonIcon } from '@/components/icons/MoonIcon';

interface IContext {
    ThemeButton: Function;
}

const ThemeContext = React.createContext({} as IContext);

export function ThemeProvider({ children }: PropsWithChildren) {

    const [theme, setTheme] = React.useState("dark");
    const Icon = theme === "dark" ? MoonIcon : SunIcon;

    React.useEffect(() => {
        const saved_theme = localStorage.getItem("smbr.app-theme") || "dark";
        localStorage.setItem("smbr.app-theme", saved_theme);
        document.body.classList.toggle("dark", saved_theme === "dark");
        setTheme(saved_theme);
    }, []);

    function toggle() {
        let theme = localStorage.getItem("smbr.app-theme") || (document.body.classList.contains("dark") ? "dark" : "light");
        let new_value = theme === 'light' ? "dark" : "light";
        document.body.classList.toggle("dark", new_value === "dark");
        localStorage.setItem("smbr.app-theme", new_value);
        setTheme(new_value);
    }

    function ThemeButton() {
        return (
            <button onClick={toggle} type="button" className="text-black dark:text-white hover:text-emerald-400 dark:hover:text-emerald-400 font-medium rounded-lg text-sm p-1 text-center inline-flex items-center mr-2">
                <Icon />
            </button>
        )
    }

    return (
        <ThemeContext.Provider value={{ ThemeButton }}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme() {
    return React.useContext(ThemeContext);
}