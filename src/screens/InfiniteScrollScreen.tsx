import React, { useState } from 'react';
import { styles } from '../../android/app/src/theme/appTheme';
import { HeaderTitle } from '../components/HeaderTitle';

import { FadeInImage } from '../components/FadeInImage';
import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native';

export const InfiniteScrollScreen = () => {

    const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5]);

    const loadMore = () => {

        const newArray: number[] = [];
        for (let i = 0; i < 5; i++) {
            newArray[i] = numbers.length + i
        }

        setTimeout(() => {
            setNumbers([...numbers, ...newArray]);
        }, 1500);


    }

    const renderItem = (item: number) => {
        return (

            <FadeInImage
                uri={`https://picsum.photos/id/${item}/500/400`}
                style={{
                    width: '100%',
                    height: 400,
                }}
            />
        )
        // <Image
        //     source={{ uri: `https://picsum.photos/id/${item}/500/400` }}
        //     style={{
        //         width: '100%',
        //         height: 400
        //     }}
        // />
    }
    return (<View style={{ flex: 1 }}>
        <FlatList
            data={numbers}
            keyExtractor={(item) => item.toString()}
            renderItem={({ item }) => renderItem(item)}
            ListHeaderComponent={() => (
                <View style={{ marginHorizontal: 20 }}>
                    <HeaderTitle title='Infinite Scroll' />
                </View>
            )}

            //Se ejecuta la funcion cuando llega al fondo
            onEndReached={loadMore}
            //Este indica que cerca debemos estar del fondo para ejecutar la funcion de arriba
            //El 0.5 indica que debemops estar a mitad de la pantalla para que se dispare el scroll
            // que se comenta arriba
            onEndReachedThreshold={0.5}
            ListFooterComponent={() => (
                <View style={{
                    height: 150,
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center'



                }}>
                    <ActivityIndicator size={25} color="#5856D6" />
                </View>
            )}
        />
    </View>)
};


const infiniteStyles = StyleSheet.create({
    textItem: {
        backgroundColor: 'green',
        height: 150
    }
});
