import React, { useContext } from 'react';
import { StyleSheet, TextInput, View, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { styles } from '../../android/app/src/theme/appTheme';
import { CustomSwitch } from '../components/CustomSwitch';
import { HeaderTitle } from '../components/HeaderTitle';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { useForm } from '../hooks/useForm';


const { theme: { colors,dividerColor } } = useContext(ThemeContext);

export const InputScreen = () => {

    const { form, onChange, isSubscribed } = useForm({

        name: '',
        email: '',
        phone: '',
        isSubscribed: false

    });

    // //Las propiedades computadas se escriben entre '[]' por esa razon [field] se
    // // encuentra de esta manera

    // const onChange = (value: string, field: string) => {
    //     setForm({
    //         ...form,
    //         [field]: value
    //     })
    // }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <ScrollView>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.globalMargin}>
                        <HeaderTitle title="Inputs" />

                        <TextInput
                            style={{
                                ...stylesScreen.inputStyle,
                                borderColor: colors.text,
                                color: colors.text

                            }}
                            placeholder='Inserte su Nombre'
                            autoCorrect={false}
                            autoCapitalize="words"
                            onChangeText={(value) => onChange(value, 'name')}


                        />


                        <TextInput
                            style={{
                                ...stylesScreen.inputStyle,
                                borderColor: colors.text,
                                color: colors.text

                            }}
                            placeholder='Inserte su Nombre'
                            autoCorrect={false}
                            autoCapitalize="words"
                            onChangeText={(value) => onChange(value, 'name')}
                            placeholderTextColor={dividerColor}


                        />

                        <View style={stylesScreen.switchRow}>
                            <Text style={stylesScreen.switchText}>Subscribirse</Text>
                            <CustomSwitch isOn={isSubscribed} onChange={(value) => onChange(value, 'isSubscribed')} />
                        </View>

                        <HeaderTitle title={JSON.stringify(form, null, 3)} />
                        <HeaderTitle title={JSON.stringify(form, null, 3)} />

                        <TextInput
                            style={stylesScreen.inputStyle}
                            placeholder='Inserte su Telefono'
                            onChangeText={(value) => onChange(value, 'phone')}
                            keyboardType='number-pad'

                        />

                        <View style={{ height: 100 }} />
                    </View>

                </TouchableWithoutFeedback>
            </ScrollView>
        </KeyboardAvoidingView>
    )
};

const stylesScreen = StyleSheet.create({
    inputStyle: {
        borderWidth: 1,
        height: 50,
        paddingHorizontal: 10,
        borderRadius: 10,
        marginVertical: 10
    },

    switchRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10
    },
    switchText: {
        fontSize: 25
    }

});

