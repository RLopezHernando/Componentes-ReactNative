import React, { useState } from 'react';
import { RefreshControl, ScrollView, View } from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';



import { styles } from '../../android/app/src/theme/appTheme';
import { HeaderTitle } from '../components/HeaderTitle';

export const PullToRefreshScreen = () => {

    const { top } = useSafeAreaInsets();

    const [refreshing, setRefreshing] = useState(false);
    const [data, setData] = useState<string>();


    const onRefresh = () => {
        setRefreshing(true);
        setTimeout(() => {
            console.log('Terminamos');
            setRefreshing(false)
            setData('Hola Mundo');
        }, 3000);
    }
    return (
        <ScrollView
            style={{
                 marginTop: refreshing ? top : 0
            }}
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                    progressViewOffset={10}
                    progressBackgroundColor="#5856D6"
                    colors={['white', 'red', 'orange']}

                />
            }
        >
            <View style={styles.globalMargin}>
                <HeaderTitle title="Pull To Refresh" />
                {
                    data && <HeaderTitle title={data} />
                }

            </View>
        </ScrollView>

    )
};
