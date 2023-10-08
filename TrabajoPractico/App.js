import React, { useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import ListItem from './Components/ListItem';
import AddItemModal from './Components/AddItemModal';


const App = () => {
  const [data, setData] = useState([
    { id: 1, image: "https://i.pinimg.com/474x/f9/cd/f9/f9cdf9807c6e607bf3a2c171825cb85a.jpg" },
    { id: 2, image: "https://img.freepik.com/foto-gratis/cachorros-beagle-tricolor-estan-planteando-lindos-perritos-o-mascotas-color-blanco-braun-negro-jugando-pared-gris-mire-atento-jugueton-concepto-movimiento-movimiento-accion-espacio-negativo_155003-33651.jpg" },
    { id: 3, image: "https://img.freepik.com/foto-gratis/adorable-beagle-cachorro-solo-retrato_53876-64817.jpg" },
  ]);
  const [modalVisible, setModalVisible] = useState(false);
  const [newItem, setNewItem] = useState({ id: '', image: '' });

  const addItem = () => {
    if (newItem.id && newItem.image) {
      setData((prevData) => [...prevData, newItem]);
      setNewItem({ id: '', image: '' });
      setModalVisible(false);
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Add Item" onPress={() => setModalVisible(true)} />
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ListItem item={item} />}
      />


      <AddItemModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        newItem={newItem}
        setNewItem={setNewItem}
        addItem={addItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default App;
