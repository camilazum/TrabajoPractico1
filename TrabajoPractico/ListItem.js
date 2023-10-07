import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ListItem = ({ item }) => (
  <View style={styles.itemContainer}>
    <Image source={{ uri: item.image }} style={styles.itemImage} />
    <Text style={styles.itemText}>{item.id}</Text>
  </View>
);

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  itemImage: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 25,
  },
  itemText: {
    fontSize: 16,
  },
});

export default ListItem;
