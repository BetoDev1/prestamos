import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import colors from '../utils/colors';

export default function Form(){
    return(
        <View style={estiloFormu.viewForm}>
            <View style={estiloFormu.viewInputs} >
                <TextInput placeholder='Cantidad a pedir' keyboardType='numeric' style={estiloFormu.input} >

                </TextInput>

                <TextInput placeholder='Cantidad a pedir' keyboardType='numeric'
                style={[estiloFormu.input, estiloFormu.input2] }></TextInput>

            </View>
            
        </View>
    )

}

const estiloFormu = StyleSheet.create({
    viewForm: {
        position: 'absolute',
        bottom: -90,
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
        borderColor: colors.PRIMARY_COLOR,
        borderRadius: 5,
        width: '60%',
        marginRight: 5,
        marginLeft: -5,
        marginBottom: 10,
        },

    input2: {
        width: '40%',
        marginLeft: 5

    }
});
