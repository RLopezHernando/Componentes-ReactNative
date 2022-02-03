
import { createContext, useReducer } from "react";
import { Appearance, AppState } from "react-native";
import { ThemeState, themeReducer, lightTheme, darkTheme } from './themeReducer';


interface ThemeContextProps {
    theme: ThemeState;
    setDarkTheme: () => void;
    setLightTheme: () => void;
}



export const ThemeContext = createContext({} as ThemeContextProps);




//Dentro de esta funcion vamos a manejar los estados a traves de un ThemeReducer
export const ThemeProvider = ({ children }: any) => {

    // const colorScheme = useColorScheme();

    const [theme, dispatch] = useReducer(
        themeReducer, 
        (Appearance.getColorScheme() === 'dark') ? darkTheme : lightTheme); //Leer el estado o el tema global del dispositivo
    
    useEffect(() => {
        AppState.addEventListener('change', (status) => {
            if(status === 'active'){
                (Appearance.getColorScheme() === 'light')
                    ?setLightTheme()
                    :setDarkTheme();
            }
        })
    }, []);


    const setDarkTheme = () => {
        dispatch({ type: 'set_dark_theme' })
        console.log('Set DarkTheme');

    }

    const setLightTheme = () => {
        dispatch({ type: 'set_light_theme' })
        console.log('Set LightTheme');
    }


    return (
        <ThemeContext.Provider value={{
            theme,
            setDarkTheme,
            setLightTheme,
        }}>
            {children}
        </ThemeContext.Provider>
    )
}

function useEffect(arg0: () => void, arg1: never[]) {
    throw new Error("Function not implemented.");
}
