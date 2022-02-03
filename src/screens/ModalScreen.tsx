
import React, { useState } from 'react';
import { Button, Modal, Text, View } from 'react-native';
import { styles } from '../../android/app/src/theme/appTheme';
import { HeaderTitle } from '../components/HeaderTitle';

export const ModalScreen = () => {

    const [isVisible, setIsVisible] = useState(false);


    return (<View style={styles.globalMargin}>
        <HeaderTitle title="Modal Screen" />

        <Button
            title="Abrir Modal"
            onPress={() => { setIsVisible(true) }}
        />

        <Modal
            animationType='fade'
            visible={isVisible}
            transparent={true}

        >
            {/* Background negro */}
            <View style={{
                flex: 1,
                backgroundColor: 'rgba(0,0,0,0.3)',
                justifyContent: 'center',
                alignItems: 'center',
            }} />

            <View style={{
                backgroundColor: 'white',
                width: 200,
                height: 200,
                justifyContent: 'center',
                alignItems: 'center',
                shadowOffset: {
                    width: 0,
                    height: 10
                },
                shadowOpacity: 0.25,
                elevation: 10,
                borderRadius: 20
            }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Modal</Text>
                <Text style={{ fontSize: 16, fontWeight: '300' ,marginBottom:20}}>Cuerpo del modal</Text>
                <Button
                    title="Cerrar"
                    onPress={() => setIsVisible(false)}
                />
            </View>

        </Modal>
    </View>
    )
};
