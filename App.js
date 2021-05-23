import React from 'react';
import {StyleSheet, Text, SafeAreaView, View, StatusBar} from 'react-native';
import colores from './src/utils/colors';
import Form from "./src/components/Form";

export default function App () {
  return(
<>
    <StatusBar barStyle='light-content' backgroundColor='#0098D3' ></StatusBar>
    <SafeAreaView style={style.safeArea}>
      <Text style={style.tituloApp} >Formulario Head</Text>
      <Form></Form>
    </SafeAreaView>

    <View>
      <Text> Resultadfdhho </Text>
    </View>

    <View>
      <Text>Foedoter</Text>
    </View>
  </>  
  );
}

const style = StyleSheet.create({
  safeArea: {
    backgroundColor: colores.PRIMARY_COLOR,
    height: 200,
    borderBottomLeftRadius: 35, 
    borderBottomRightRadius: 35,
    alignItems: 'center'  
  },

  tituloApp: {
    fontSize: 25,
    fontWeight: 'bold',
    color:'white',
    marginTop: 20,
  }
  
  
});