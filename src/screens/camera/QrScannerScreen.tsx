import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import { CameraView, useCameraPermissions, ScanningResult } from 'expo-camera/next';
import { useRegisterAccessApi } from "../../hooks/useRegisterAccessApi";
import { Fab } from "../../components/Fab";
import { appTheme } from "../../theme/appTheme";

export const QrScannerScreen = () => {

    const [ getFacing, setFacing ] = useState<string>('front');
    const [ color, setColor ] = useState<string>('white');
    const [ data, setData ] = useState<any>();
    const [ estado, setEstado ] = useState<boolean>(false);
    const [ permissions, requestPermissions ] = useCameraPermissions();

    // Registrar en el API
    const { request, isLoading, requestRegister } = useRegisterAccessApi();

    const colors: string[] = [ "#4e2f5c", "#78386a", "#b54b7d", "#ff6b91", "#ffa0a1" ];

    const randomColor = () => {
        return colors[ Math.floor( Math.random() * colors.length ) ];
    }

    useEffect( () => {

        ( async () => {
            ( ! permissions?.granted ) && ( async () => await requestPermissions() );
        });

        const interval = setInterval( () => {
            setColor( randomColor ); 
        },400);
        
        return () => clearInterval( interval );

    },[]);

    const toggleCameraFacing = () => {
        setFacing( current => ( current === 'back' ? 'front' : 'back' ) );
    }

    return(
        <View
            style={{
                ...appTheme.containerGlobal,
            }}
        >
            {
                ( !estado ) &&
                <View
                    style={{
                        alignItems: "center"
                    }}
                >
                    {
                        (!isLoading) &&
                        <ActivityIndicator
                            style={{ height: 100 }}
                            size={ 100 }
                            color="pink"
                        />
                    }
                    {
                        ( request == false) &&
                        <Text
                            style={{
                                ...appTheme.title,
                                color: "pink",
                                fontWeight: "bold"
                            }}
                        >
                            { 'QR invalido' }
                        </Text>
                    }
                    {
                        ( request == true ) &&
                        <Text
                            style={{
                                ...appTheme.title,
                                color: "pink",
                                fontWeight: "bold"
                            }}
                        >
                            { `Registro de acceso: \n ${data.nombre}` }
                        </Text>
                    }
                    <TouchableOpacity
                        onPress={ () => {
                            setEstado(true);
                        }}
                    >
                        <View
                            style={{
                                height: 70,
                                width: 200,
                                backgroundColor: 'violet',
                                justifyContent: "center",
                                alignItems: "center",
                                borderRadius: 20,
                                borderWidth: 2,
                                borderColor: "violet",
                                margin: 5
                            }}
                        >
                            <Text
                                style={{
                                    color: "white",
                                    fontSize: 30,
                                    fontWeight: "bold",
                                    textAlign: "center"
                                }}
                            >
                                Registrar QR
                                {'\n 📷'}
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            }
            {
                ( estado ) &&
                <CameraView
                    facing={ getFacing }
                    barcodeScannerSettings={{
                        barcodeTypes: [ "qr" ],
                    }}
                    onBarcodeScanned={ async ( result: ScanningResult ) => {
                        setEstado( false );
                        let resultado = JSON.parse(result.data);
                        setData( resultado );
                        await requestRegister( resultado.matricula );
                    }}
                >
                    <View
                        style={{ height: "100%", width: "100%" }}
                    >
                        <View
                            style={{
                                width: 200,
                                height: 200,
                                borderColor: color,
                                borderWidth: 10,
                                position: "absolute",
                                top: "35%",
                                alignSelf: "center",
                                borderRadius: 10
                            }}
                        />
                        <Text
                            style={{
                                ...appTheme.title,
                                alignSelf: "center",
                                color: color,
                                top: "65%"
                            }}
                        >
                            Escaner QR
                        </Text>
                        <Fab
                            action={ toggleCameraFacing }
                            title="📷"
                            position="button_right"
                        />
                    </View>
                </CameraView>
            }
        </View>
    );

}
