import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { appTheme } from '../../theme/appTheme';
import { Fab } from '../../components/Fab';

export const Screen2 = () => {

    const navigator = useNavigation();

    return(
        <View
            style={{
                ...appTheme.containerGlobal,
                ...appTheme.containerMarginGlobal
            }}
        >
            <Text
                style={ appTheme.title }
            >
                Screen2
            </Text>
            <Fab
                title='->'
                position='button_right'
                action={ () => navigator.navigate("Screen3") }
            />
        </View>
    );
}
