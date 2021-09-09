import React, {useState} from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableWithoutFeedback,
  Animated,
} from 'react-native';
import {Picker} from '@react-native-community/picker';

const Formulario = () => {
  const [animacionBtn] = useState(new Animated.Value(1));
  const animacionEntrada = () => {
    Animated.spring(animacionBtn, {toValue: 0.75, useNativeDriver: true,}).start();
  };
  const animacionSalida = () => {
    Animated.spring(animacionBtn, {
      toValue: 1,
      friction: 4,
      tension: 30,
      useNativeDriver: true,
    }).start();
  };
  const estiloAnimacion = {
    transform: [{scale: animacionBtn}],
  };
  return (
    <>
      <View>
        <View style="styles.formulario">
          <TextInput
            style={styles.input}
            placeholder="Ciudad"
            placeholderTextColor="#666"
          />
        </View>
        <View>
          <Picker itemStyle={{height: 120, backgroundColor: '#FFF'}}>
            <Picker.Item label="-- Seleccione un país --" value="" />
            <Picker.Item label="Estados Unidos" value="US" />
            <Picker.Item label="México" value="MX" />
            <Picker.Item label="Argentina" value="AR" />
            <Picker.Item label="Colombia" value="CO" />
            <Picker.Item label="Costa Rica" value="CR" />
            <Picker.Item label="España" value="ES" />
            <Picker.Item label="Ecuador" value="EC" />
          </Picker>
        </View>
        <TouchableWithoutFeedback
          onPressIn={() => animacionEntrada()}
          onPressOut={() => animacionSalida()}>
          <Animated.View style={[styles.btnBuscar, estiloAnimacion]}>
            <Text style={styles.txtBuscar}>Buscar clima</Text>
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    padding: 10,
    height: 50,
    backgroundColor: '#FFF',
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
  btnBuscar: {
    marginTop: 50,
    backgroundColor: '#000',
    padding: 10,
    justifyContent: 'center',
  },
  txtBuscar: {
    color: '#FFF',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'center',
    fontSize: 18,
  },
});

export default Formulario;
