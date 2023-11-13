import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ScrollView, StyleSheet, Button } from 'react-native';

const ReadScreen = ({ ip }) => {
  const [jugadores, setJugadores] = useState([]);

  const fetchData = async (endpoint) => {
    try {
      const response = await fetch(`http://${ip}:3000/${endpoint}`);
      const data = await response.json();
      setJugadores(data);
    } catch (error) {
      console.error('Error al obtener datos:', error);
    }
  };

  useEffect(() => {
    fetchData('read'); // Mostrar todo al principio
  }, []);

  const handlePressButton1 = () => {
    fetchData('read'); // Mostrar todo
  };

  const handlePressButton2 = () => {
    fetchData('read/argentina'); // Jugadores Argentinos
  };

  const handlePressButton3 = () => {
    fetchData('read/weight'); // Jugadores entre 75 y 80 kg
  };

  const handlePressButton4 = () => {
    fetchData('read/tallest'); // Jugador más alto
  };

  return (
    <View>
      <ScrollView horizontal>
        <View style={styles.container}>
          <View style={styles.row}>
            <Text style={styles.BigCellHeader}>Nombre</Text>
            <Text style={styles.SmallCellHeader}>POS</Text>
            <Text style={styles.SmallCellHeader}>Edad</Text>
            <Text style={styles.BigCellHeader}>Estatura</Text>
            <Text style={styles.SmallCellHeader}>Peso</Text>
            <Text style={styles.BigCellHeader}>Nacionalidad</Text>
            <Text style={styles.SmallCellHeader}>Ap</Text>
            <Text style={styles.SmallCellHeader}>SUB</Text>
            <Text style={styles.SmallCellHeader}>ATA</Text>
            <Text style={styles.SmallCellHeader}>GA</Text>
            <Text style={styles.SmallCellHeader}>ASI</Text>
            <Text style={styles.SmallCellHeader}>FC</Text>
            <Text style={styles.SmallCellHeader}>FS</Text>
            <Text style={styles.SmallCellHeader}>TA</Text>
            <Text style={styles.SmallCellHeader}>TR</Text>
          </View>
          <FlatList
            data={jugadores}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.row}>
                <Text style={styles.BigCell}>{item.Nombre}</Text>
                <Text style={styles.SmallCell}>{item.POS}</Text>
                <Text style={styles.SmallCell}>{item.Edad}</Text>
                <Text style={styles.BigCell}>{item.Estatura}</Text>
                <Text style={styles.SmallCell}>{item.Peso}</Text>
                <Text style={styles.BigCell}>{item.Nacionalidad}</Text>
                <Text style={styles.SmallCell}>{item.Ap}</Text>
                <Text style={styles.SmallCell}>{item.SUB}</Text>
                <Text style={styles.SmallCell}>{item.ATA}</Text>
                <Text style={styles.SmallCell}>{item.GA}</Text>
                <Text style={styles.SmallCell}>{item.ASI}</Text>
                <Text style={styles.SmallCell}>{item.FC}</Text>
                <Text style={styles.SmallCell}>{item.FS}</Text>
                <Text style={styles.SmallCell}>{item.TA}</Text>
                <Text style={styles.SmallCell}>{item.TR}</Text>
              </View>
            )}
          />

        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <Button title="Mostrar todo" onPress={handlePressButton1} style={styles.Boton} />
        <Button title="Jugadores Argentinos" onPress={handlePressButton2} style={styles.Boton} />
        <Button title="Jugadores entre 75 y 80 kg" onPress={handlePressButton3} style={styles.Boton} />
        <Button title="Jugador más alto" onPress={handlePressButton4} style={styles.Boton} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  BigCellHeader: {
    width: 100,
    fontWeight: 'bold',
  },
  SmallCellHeader: {
    width: 40,
    fontWeight: 'bold',
  },
  BigCell: {
    width: 100,
  },
  SmallCell: {
    width: 40,
  },
  buttonContainer: {
    marginTop: 20,
    flexDirection: 'column',
  },
  Boton: {
    marginTop: 5,
  }
});

export default ReadScreen;
