import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Alert } from 'react-native';

const CreateScreen = ({ip}) => {
  const [nombre, setNombre] = useState('');
  const [pos, setPos] = useState('');
  const [edad, setEdad] = useState('');
  const [estatura, setEstatura] = useState('');
  const [peso, setPeso] = useState('');
  const [nacionalidad, setNacionalidad] = useState('');
  const [ap, setAp] = useState('');
  const [sub, setSub] = useState('');
  const [ata, setAta] = useState('');
  const [ga, setGa] = useState('');
  const [asi, setAsi] = useState('');
  const [fc, setFc] = useState('');
  const [fs, setFs] = useState('');
  const [ta, setTa] = useState('');
  const [tr, setTr] = useState('');

  const handleCreate = async () => {
    if (
      !nombre ||
      !pos ||
      !edad ||
      !estatura ||
      !peso ||
      !nacionalidad ||
      !ap ||
      !sub ||
      !ata ||
      !ga ||
      !asi ||
      !fc ||
      !fs ||
      !ta ||
      !tr
    ) {
      Alert.alert('Error', 'Todos los campos son obligatorios');
      return;
    }

    // Lógica para enviar datos a tu API
    const nuevoJugador = {
      Nombre: nombre,
      POS: pos,
      Edad: edad,
      Estatura: estatura,
      Peso: peso,
      Nacionalidad: nacionalidad,
      Ap: ap,
      SUB: sub,
      ATA: ata,
      GA: ga,
      ASI: asi,
      FC: fc,
      FS: fs,
      TA: ta,
      TR: tr,
    };

    // Realiza la solicitud HTTP para enviar los datos
    try {
      const response = await fetch(`http://${ip}:3000/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(nuevoJugador),
      });

      if (response.status === 201) {
        // Datos creados exitosamente
        console.log('Jugador creado con éxito');
        // Muestra el modal de éxito
        Alert.alert('Éxito', 'Jugador creado con éxito');
        // Puedes realizar alguna acción adicional si es necesario
      } else {
        console.error('Error al crear jugador:', response.status);
        // Muestra un modal de error si la creación falla
        Alert.alert('Error', 'No se pudo crear el jugador. Por favor, inténtalo de nuevo.');
      }
    } catch (error) {
      console.error('Error al crear jugador:', error);
      // Muestra un modal de error si hay un error en la solicitud HTTP
      Alert.alert('Error', 'Hubo un error al crear el jugador. Por favor, inténtalo de nuevo.');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={nombre}
        onChangeText={(text) => setNombre(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Posicion"
        value={pos}
        onChangeText={(text) => setPos(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Edad"
        value={edad}
        onChangeText={(text) => setEdad(text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Estatura"
        value={estatura}
        onChangeText={(text) => setEstatura(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Peso"
        value={peso}
        onChangeText={(text) => setPeso(text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Nacionalidad"
        value={nacionalidad}
        onChangeText={(text) => setNacionalidad(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Apariciones como titular"
        value={ap}
        onChangeText={(text) => setAp(text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Apariciones como suplente"
        value={sub}
        onChangeText={(text) => setSub(text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Atajadas"
        value={ata}
        onChangeText={(text) => setAta(text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Goles a favor"
        value={ga}
        onChangeText={(text) => setGa(text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Asistencias"
        value={asi}
        onChangeText={(text) => setAsi(text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Faltas cometidas"
        value={fc}
        onChangeText={(text) => setFc(text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Faltas sufridas"
        value={fs}
        onChangeText={(text) => setFs(text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Tarjetas amarillas"
        value={ta}
        onChangeText={(text) => setTa(text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Tarjetas rojas"
        value={tr}
        onChangeText={(text) => setTr(text)}
        keyboardType="numeric"
      />
      <Button title="Crear Jugador" onPress={handleCreate} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    padding: 8,
  },
});

export default CreateScreen;
