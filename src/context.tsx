import React, { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction, useEffect } from 'react';

// Definir o tipo do contexto
interface ThemeContextType {
    theme: string;
    setTheme: Dispatch<SetStateAction<string>>;
}

// Criar o contexto
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Criar o provider
interface ThemeProviderProps {
    children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
    // Pega o tema do localStorage
    const storedTheme = localStorage.getItem('theme') || 'zapzap';
    const [theme, setTheme] = useState<string>(storedTheme);

    // Salva o tema no localStorage quando mudar
    useEffect(() => {
        localStorage.setItem('theme', theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

// Criar um hook personalizado para acessar o contexto
export function useTheme(): ThemeContextType {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}
