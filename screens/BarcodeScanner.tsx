import React from 'react';
import BarcodeScannerComponent from "react-webcam-barcode-scanner";

import {Button} from 'react-native';
import { Text, View } from '../components/Themed';

function BarcodeScanner() {

    const [data, setData] = React.useState('Not Found');
    return (
        <>
            <BarcodeScannerComponent
                width={294}
                height={204}
                onUpdate={(err, result) => {
                    if (result) setData(result.text)
                    else setData('Not Found')
                }}
            />
            {data}
        </>
    )
}

export default BarcodeScanner;