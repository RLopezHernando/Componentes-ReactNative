import React, { useContext } from 'react';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { createStackNavigator } from '@react-navigation/stack';

import { AlertScreen } from '../screens/AlertScreen';
import { Animation101Screen } from '../screens/Animation101Screen';
import { Animation102Screen } from '../screens/Animation102Screen';
import { HomeScreen } from '../screens/HomeScreen';
import { InputScreen } from '../screens/InputScreen';
import { SwitchScreen } from '../screens/SwitchScreen';
import { PullToRefreshScreen } from '../screens/PullToRefreshScreen';
import { SectionListScreen } from '../screens/SectionListScreen';
import { ModalScreen } from '../screens/ModalScreen';
import { InfiniteScrollScreen } from '../screens/InfiniteScrollScreen';
import { SlidesScreen } from '../screens/SlidesScreen';
import { ChangeThemeScreen } from '../screens/ChangeThemeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { View } from 'react-native';




const Stack = createStackNavigator();

export const Navigator = () => {

    //Necesitamos el contexto del theme para poder cambiar el theme de la aplicacion
    //El useContext se aplica sobre el NavigatorContainer que afectara a toda la aplicacion
    const { theme } = useContext(ThemeContext);
    return (

        <View style={{backgroundColor: theme.colors.background,flex:1}}>
            <NavigationContainer
                theme={theme}
            >
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false,
                        cardStyle: {
                            //ackgroundColor:'white'
                        }
                    }}
                >
                    <Stack.Screen name="HomeScreen" component={HomeScreen} />
                    <Stack.Screen name="Animation101Screen" component={Animation101Screen} />
                    <Stack.Screen name="Animation102Screen" component={Animation102Screen} />
                    <Stack.Screen name="SwitchScreen" component={SwitchScreen} />
                    <Stack.Screen name="AlertScreen" component={AlertScreen} />
                    <Stack.Screen name="InputScreen" component={InputScreen} />
                    <Stack.Screen name="PullToRefreshScreen" component={PullToRefreshScreen} />
                    <Stack.Screen name="SectionListScreen" component={SectionListScreen} />
                    <Stack.Screen name="ModalScreen" component={ModalScreen} />
                    <Stack.Screen name="InfiniteScrollScreen" component={InfiniteScrollScreen} />
                    <Stack.Screen name="SlidesScreen" component={SlidesScreen} />
                    <Stack.Screen name="ChangeThemeScreen" component={ChangeThemeScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </View>
    );
}
