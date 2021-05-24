import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Resultado(props) {
    const {capital, interes, meses, total, errorMessage}=props;
    return (
        <View> 
            {total && <Text>RESULTADO TOTAL</Text>} 
            <View>
            <Text style={styles.error}>{errorMessage}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    error: {
        color: 'red',
        fontWeight: 'bold'
    }
})
