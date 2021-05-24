import React, {useState} from 'react';
import {StyleSheet, Text, SafeAreaView, View, StatusBar, Button} from 'react-native';
import colores from './src/utils/colors';
import Form from "./src/components/Form";
import colors from './src/utils/colors';
import Footer from './src/components/Footer';
import Resultado from './src/components/Resultado';

// YellowBox.ignoreWarnings(['Picker has been extracted']);

export default function App () {

  const [capital, setCapital] = useState(null);
  const [interes, setInteres] = useState(null);
  const [meses, setMeses] = useState(null);
  const [total, setTotal] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const calculate = () => {
   reset();
    if (!capital) {
      setErrorMessage("No seleccionaste el monto a pedir")
    } else if (!interes) { 
      setErrorMessage('No ingresaste el interes')
      
    } else if (!meses) { setErrorMessage("Debes seleccionar la cantidad de cuotas")
      
    } else {
      const i = interes / 100;
      const fee = capital / ((1 - Math.pow(i + 1, -meses)) / i);
      setTotal({
        monthlyFee: fee.toFixed(2).replace('.', ','),
        totalPayable: (fee * meses).toFixed(2).replace('.', ','),
      });
    }
  };
  const reset = () => {
    setErrorMessage('');
    setTotal(null);
  };

  return(
<>
    <StatusBar barStyle='light-content' backgroundColor='#0098D3' ></StatusBar>
    <SafeAreaView style={style.safeArea}>
      <View style={style.background}/>
      <Text style={style.tituloApp}>Simulador de Prestamos</Text>
      <Form
        setCapital={setCapital}
        setInteres={setInteres}
        setMeses={setMeses}
      />
    </SafeAreaView>

    <Resultado 
     capital={capital}
     interes={interes}
     meses={meses}
     total={total}
     errorMessage={errorMessage}></Resultado>

    <Footer calculate={calculate}></Footer>
   
  </>  
  );
}

const style = StyleSheet.create({
  safeArea: {
    
    height: 290,
   
    alignItems: 'center'  
  },
  background: {

    backgroundColor: colors.PRIMARY_COLOR,
    height: 200,
    width: "100%",
    borderBottomLeftRadius: 35, 
    borderBottomRightRadius: 35,
    zIndex: -1,
    position:'absolute'
  },

  tituloApp: {
    fontSize: 25,
    fontWeight: 'bold',
    color:'white',
    marginTop: 40,
  },

  
  
  
});