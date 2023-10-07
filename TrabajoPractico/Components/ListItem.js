import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ListItem = ({ item }) => (
  <View style={styles.itemContainer}>
    <Text style={styles.itemText}>ID: {item.id}</Text>
    <Image source={{ uri: item.image }} style={styles.itemImage} />    
  </View>
);

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#33E6FF',
    marginBottom: 10,
  },
  itemImage: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 25,
  },
  itemText: {
    fontSize: 16,
    marginRight: 15,
  },
});

export default ListItem;
