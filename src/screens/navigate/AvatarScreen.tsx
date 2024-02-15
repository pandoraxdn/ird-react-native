import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { View, TouchableOpacity, Image } from 'react-native';
import { appTheme } from '../../theme/appTheme';

interface Props{
    url: string; 
}

const Avatar = ( { url }: Props ) => {

    const { authState ,changeFavoriteImage } = useContext( AuthContext );

    return(
        <TouchableOpacity
            onPress={ () => ( authState.isLoggenIn ) && changeFavoriteImage( url )  }
        >
            <Image
                style={{
                    ...appTheme.avatar,
                    width: 100,
                    height: 100,
                    marginTop: 5,
                }}
                source={{ uri: url }}
            />
        </TouchableOpacity>
    );
}

export const AvatarScreen = () => {

    return(
        <View
            style={{
                ...appTheme.containerGlobal,
                ...appTheme.containerMarginGlobal,
                alignItems: "center"
            }}
        >
            <Avatar
                url="https://w7.pngwing.com/pngs/197/63/png-transparent-ubuntu-linux-distribution-long-term-support-canonical-apt-linux-text-trademark-orange-thumbnail.png"
            /> 
            <Avatar
                url="https://w7.pngwing.com/pngs/388/207/png-transparent-opensuse-suse-linux-distributions-installation-linux-text-logo-grass.png"
            /> 
            <Avatar
                url="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Al-logo.svg/2048px-Al-logo.svg.png"
            /> 
            <Avatar
                url="https://felfa.github.io/assets/article_images/2017-01-09-debian-logo/deblogo.png"
            /> 
        </View>
    );
}
