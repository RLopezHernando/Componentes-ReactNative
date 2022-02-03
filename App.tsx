import { DefaultTheme, DarkTheme, NavigationContainer, Theme } from '@react-navigation/native';
import React from 'react';
import { ThemeProvider } from './src/context/themeContext/ThemeContext';
import { Navigator } from './src/navigator/Navigator';


// const customTheme :Theme= {
//   dark:true,
//   colors:{
//     ...DefaultTheme.colors
//     // primary: string;
//     // background: string;
//     // card: string;
//     // text: string;
//     // border: string;
//     // notification: string;

//   }
// }


// El componente <AppState></AppState> debe estar por encima
// de lo que contenga App para luego poder cambiar lo que sea necesario
// En esta caso controlamos el Tema de la Aplicacion

const App = () => {
  return (
    <AppState>
      <Navigator />
    </AppState>
  )
}

//El AppState es el que provee todo lo que se encuentra dentro del <ThemeProvider>
// En este caso {children}

const AppState = ({ children }: any) => {

  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  )
}

export default App
