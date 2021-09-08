import React from 'react';
import {Text, View, TextInput, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import { Picker } from '@react-native-community/picker';

const Formulario = () => {
  return (
    <>
      <View>
        <View style="styles.formulario">
          <TextInput placeholder="Ciudad" placeholderTextColor="#666" />
        </View>
        <View>
            <Picker>
                <Picker.Item label='-- Seleccione un país --' value=""/>
                <Picker.Item label='Estados Unidos' value="US"/>
                <Picker.Item label='México' value="MX"/>
                <Picker.Item label='Argentina' value="AR"/>
                <Picker.Item label='Colombia' value="CO"/>
                <Picker.Item label='Costa Rica' value="CR"/>
                <Picker.Item label='España' value="ES"/>
                <Picker.Item label='Ecuador' value="EC"/>
            </Picker>
        </View>
        <TouchableWithoutFeedback>
            <View>
                <Text>Buscar clima</Text>
            </View>
        </TouchableWithoutFeedback>
      </View>
    </>
  );
};

const style = StyleSheet.create({
  formlario: {
    marginTop: 100,
  },
});

export default Formulario;
