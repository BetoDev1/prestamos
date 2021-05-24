import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import colors from '../utils/colors';

export default function Form(props){
    const {setCapital, setInteres, setMeses} = props;
    return(
        <View style={estiloFormu.viewForm}>
            <View style={estiloFormu.viewInputs} >
                <TextInput placeholder='  Monto'
                 keyboardType='numeric' 
                 style={estiloFormu.input}
                 onChange={(e) => setCapital(e.nativeEvent.text)}>
                    
                </TextInput>

                <TextInput placeholder='  Interes' keyboardType='numeric'
                style={[estiloFormu.input, estiloFormu.input2] }
                onChange={(e) => setInteres(e.nativeEvent.text)}></TextInput>

            </View>
            
            <RNPickerSelect 
            placeholder={{label:'Selecciona un plazo'} }
            style={estiloPicket} useNativeAndroidPickerStyle={false}
            onValueChange={(value) => setMeses(value)}
            items={[
                { label: '3 meses', value: 3 },
                { label: '6 meses', value: 6 },
                { label: '12 meses', value: 12 },
                { label: '24 meses', value: 24 },
               
            ]}
        />
        </View>
    )

}

const estiloFormu = StyleSheet.create({
    viewForm: {
        position: 'absolute',
        bottom: 0,
        width: '85%',
        paddingHorizontal: 50,
        backgroundColor: colors.PRIMARY_COLOR_DARK,
        borderRadius: 30,
        height: 180,
        
        justifyContent: 'center',

    },

    viewInputs: {
        flexDirection: 'row', // pone un input al lado de otro
        
    },

    input: {
        height: 50,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 8,
        width: '60%',
        marginRight: 5,
        marginLeft: -5,
        marginBottom: 10,
        paddingHorizontal: 20,
        },

    input2: {
        width: '40%',
        marginLeft: 5

    }
});
const estiloPicket = StyleSheet.create({
    inputAndroid: {
        fontSize: 16,
        paddingVertical: 8,
        paddingHorizontal: 10,
        borderWidth: 0.5,
        borderRadius: 8,
        borderColor: "grey",
        color: "black",
        paddingRight: 30,
        backgroundColor: 'white',
        paddingVertical: 12,


    },
    inputIOS: {
        fontSize: 16,
        paddingVertical: 8,
        paddingHorizontal: 10,
        borderWidth: 0.5,
        borderRadius: 8,
        borderColor: "grey",
        color: "black",
        paddingRight: 30,
        backgroundColor: 'white',
        paddingVertical: 12


    },
});