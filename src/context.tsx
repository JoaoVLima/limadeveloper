import React, { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

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
    const [theme, setTheme] = useState<string>('zapzap');

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
        throw new Error('useTheme deve ser usado dentro de um ThemeProvider');
    }
    return context;
}
