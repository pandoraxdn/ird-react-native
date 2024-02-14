import { StyleSheet } from 'react-native';

export const appTheme = StyleSheet.create({
    containerGlobal:{
        flex: 1,
        justifyContent: "center"
    },
    containerMarginGlobal:{
        marginHorizontal: 10
    },
    title:{
        fontSize: 30,
        textAlign: "center",
        fontWeight: "bold"
    },
    avatar:{
        height: 200,
        width: 200,
        borderRadius: 100,
        borderColor: "pink",
        borderWidth: 7,
    },
    avatarContainer:{
        alignItems: "center",
    },
    menuContainer:{
        alignItems: "center",
        marginHorizontal: 10,
        marginVertical: 10,
    }
});
