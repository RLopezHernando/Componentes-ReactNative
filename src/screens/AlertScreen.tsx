import React from 'react';
import { Alert, Button, Text, View } from 'react-native';
import prompt from 'react-native-prompt-android';
import { styles } from '../../android/app/src/theme/appTheme';
import { HeaderTitle } from '../components/HeaderTitle';

export const AlertScreen = () => {

    const showPrompt = () => {
        prompt(
            'Enter password',
            'Enter your password to claim your $1.5B in lottery winnings',
            [
                { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                { text: 'OK', onPress: password => console.log('OK Pressed, password: ' + password) },
            ],
            {
                type: 'secure-text',
                cancelable: false,
                defaultValue: 'test',
                placeholder: 'placeholder'
            }
        );
    };

    const showAlert = () => {

        Alert.alert(
            "Titulo",
            "Cuerpo de la alerta",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "destructive"
                },
                { text: "OK", onPress: () => console.log("OK Pressed") }
            ],
            // {
            //     cancelable:true,
            //     onDismiss:() => console.log('On Dismiss')
            // }


        )

    }
    return (
        <View style={styles.globalMargin}>
            <HeaderTitle title="Alerts" />
            <Button
                title="Mostrar Alerta"
                onPress={showAlert}
            />

            <View style={{ height: 10 }} />
            <Button
                title="Mostrar Prompt"
                onPress={showPrompt}
            />
        </View>
    );
};
