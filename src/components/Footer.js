import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import colors from '../utils/colors'

export default function Footer(props) {
    const { calculate} = props;

    return (
        <View style={styles.viewFooter}>
            <TouchableOpacity onPress={calculate}>
            <Text style={styles.textoCalcular} >CALCULAR</Text>
            </TouchableOpacity>
            
        </View>
    )
}

const styles = StyleSheet.create({
    viewFooter:{
        backgroundColor: colors.PRIMARY_COLOR,
        height: 100,
        position:'absolute',
        bottom: 0,
        width: '100%',
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
        alignItems: 'center',
        justifyContent: 'center'
    },

    textoCalcular:{
        backgroundColor: colors.PRIMARY_COLOR_DARK,
        borderRadius: 50,
        color: 'white',
        padding: 20,
        width: 200,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 15
    }
})
