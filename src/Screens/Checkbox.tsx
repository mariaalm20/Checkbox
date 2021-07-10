import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Feather'

export type Props = {
  data: Array<{id: number; descricao: string}>; //dados que deseja selecionar
  onChange: (key: React.ReactNode) => void; //função que será disparada ao selecionar
  selected: Array<number>; //array de ids selecionados
};

const Checkbox = ({data, onChange, selected}: Props) => {
  const find = (id: number) => selected?.find(item => item === id);
   
  //Se no array de ids conter o item que foi selecionado pelo usuário, irá retornar o icone de check 
  return (
    <View style={styles.containerG}>
      {data.map(item => (
        <View style={styles.container} key={item.id}>
          <TouchableOpacity style={find(item.id) ? styles.buttonSelected : styles.button} onPress={() => onChange(item.id)}>
          {find(item.id) && (
              <Icon
                name="check"
                color="#ffff"
                size={40}
              />
          )}  
          </TouchableOpacity>
          <Text style={styles.text}>{item.descricao}</Text>
        </View>
      ))}
    </View>
  );
};

export default Checkbox;


const styles = StyleSheet.create({
  containerG: {
    flex: 1,
    flexDirection: 'row',
    padding: '4%',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    padding: '4%',
    alignItems: 'center',
  },
  button: {
    width: 60,
    height: 60,
    borderWidth: 3,
    borderColor: '#B73058',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonSelected: {
    width: 60,
    height: 60,
    borderWidth: 3,
    borderRadius: 15,
    borderColor: '#B73058',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#B73058'
  },
  text: {
    color:'#141414',
    fontSize: 18,
    marginTop: 20,
    fontWeight: 'bold'
  },
});

