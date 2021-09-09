import React, {useState, useEffect} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native';
import Formulario from './components/Formulario';
import Clima from './components/Clima';

const App = () => {
  const [busqueda, setBusqueda] = useState({
    ciudad: '',
    pais: '',
  });
  const [consultar, setConsultar] = useState(false);
  const {ciudad, pais} = busqueda;
  const [resultado, setResultado] = useState({});
  const [bgColor, setBgColor] = useState('rgb(71, 149, 212)');
  const mostrarAlerta = () => {
    Alert.alert('Error', 'No hay resultados, intenta con otra ciudad o país', [
      {text: 'OK'},
    ]);
  };
  useEffect(() => {
    const consultarClima = async () => {
      if (consultar) {
        const appId = '51f5d418f0d65cc81d6458964df61f75';
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;
        try {
          const respuesta = await fetch(url);
          const resultado = await respuesta.json();
          setResultado(resultado);
          setConsultar(false);
          // Modifica los colores de fondo basado en la temperatura
          const kelvin = 273.15;
          const { main } = resultado;
          const actual = main.temp - kelvin;
          if(actual<15){
            setBgColor('rgb(105, 108, 149)');
          }else if(actual>=15 && actual <25){
            setBgColor('rgb(71, 149, 212)');
          }else{
            setBgColor('rgb(178, 28, 61)');
          }
        } catch (error) {
          mostrarAlerta();
        }
      }
    };
    consultarClima();
  }, [consultar]);
  const ocultarTeclado = () => {
    Keyboard.dismiss();
  };
  const bgColorApp = {
    backgroundColor: bgColor,
  };
  return (
    <>
      <TouchableWithoutFeedback onPress={() => ocultarTeclado()}>
        <View style={[styles.app, bgColorApp]}>
          <View style={styles.contenido}>
            <Clima resultado={resultado} />
            <Formulario
              busqueda={busqueda}
              setBusqueda={setBusqueda}
              setConsultar={setConsultar}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
    justifyContent: 'center',
  },
  contenido: {
    marginHorizontal: '2.5%',
  },
});

export default App;
