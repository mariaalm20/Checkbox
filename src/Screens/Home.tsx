import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import tecnologias from '../data/tecs'
import Checkbox from './Checkbox';

const Home: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<number[]>([]);

  const handleSelect = (cod: number) => {
    const alreadySelected = selectedItem.findIndex(item => item === cod);

    if (alreadySelected >= 0) {
      const filteredItems = selectedItem.filter(item =>  item !== cod);
      setSelectedItem(filteredItems);
    } else {
      setSelectedItem([...selectedItem, cod]);
    }
  };


  return (
    <View style={styles.container}>
      <Checkbox
        data={tecnologias}
        onChange={handleSelect}
        selected={selectedItem}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#eee'
  },
});
