import { useState, useEffect } from 'react';
import { CameraView, useCameraPermissions, ScanningResult } from 'expo-camera/next';
import { View, Text } from 'react-native';
import { Fab } from '../../components/Fab';
import { appTheme } from '../../theme/appTheme';

export const ScannerQrScreen = () => {

    const [ getFacing, setFacing ] = useState<string>('front');
    const [ data, setData ] = useState<ScanningResult>();
    const [ permission, requestPermission ] = useCameraPermissions();

    useEffect(() => {
        (async () => {
            ( !permission?.granted ) && ( async () => await requestPermission() );
        })();
    }, []);

    const toggleCameraFacing = () => {
        setFacing(current => (current === 'back' ? 'front' : 'back'));
    }

  return (
    <View
        style={ appTheme.containerGlobal }
    >
      <CameraView 
          facing={ getFacing }
          barcodeScannerSettings={{
            barcodeTypes: [ "qr" ]
          }}
          onBarcodeScanned={ ( result: ScanningResult ) =>{
              setData(result);
          }}
      >
          <View style={{ height: "100%", width: "100%" }}>

            <View
                style={{
                    width: 200,
                    height: 200,
                    borderColor: "white",
                    borderWidth: 10,
                    position: "absolute",
                    top: "35%",
                    alignSelf: "center"
                }}
            />
            <Text
                style={{
                    fontSize: 22,
                    alignSelf: "center",
                    top: "70%",
                    color: "white",
                }}
            >
                Data: { JSON.stringify(data) }
            </Text>
            <Text
                style={{
                    ...appTheme.title,
                    alignSelf: "center",
                    color: "white",
                    top: "64%",
                    position: "absolute"
                }}
            >
                Scan Qr
            </Text>
            <Fab
                action={ toggleCameraFacing }
                title="Flip"
                position="button_right"
            />
        </View>
      </CameraView>
    </View>
  );
}
