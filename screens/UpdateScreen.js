import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';


const UpdateScreen = ({ip}) => {
  const [jugadores, setJugadores] = useState([]);
  const [selectedPlayer, setSelectedPlayer] = useState(null);
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

  // Obtener la lista de jugadores al cargar el componente
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://${ip}:3000/read`);
        const data = await response.json();
  
        // Actualizar el estado de jugadores después de recibir la respuesta
        setJugadores(data);
      } catch (error) {
        console.error('Error al obtener jugadores:', error);
      }
    };
  
    fetchData(); // Llama a la función para obtener la lista de jugadores
  }, []);

  // Función para manejar la actualización de datos
  const handleUpdate = async () => {
    // Validar que se haya seleccionado un jugador
    if (!selectedPlayer) {
      Alert.alert('Error', 'Por favor, selecciona un jugador');
      return;
    }

    // Lógica para enviar datos a tu API
    const jugadorActualizado = {
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
      const response = await fetch(`http://${ip}:3000/update/${selectedPlayer.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(jugadorActualizado),
      });

      if (response.status === 204) {
        // Datos actualizados exitosamente
        console.log('Jugador actualizado con éxito');
        // Muestra el modal de éxito
        Alert.alert('Éxito', 'Jugador actualizado con éxito');
        // Puedes realizar alguna acción adicional si es necesario
      } else {
        console.error('Error al actualizar jugador:', response.status);
        // Muestra un modal de error si la actualización falla
        Alert.alert('Error', 'No se pudo actualizar el jugador. Por favor, inténtalo de nuevo.');
      }
    } catch (error) {
      console.error('Error al actualizar jugador:', error);
      // Muestra un modal de error si hay un error en la solicitud HTTP
      Alert.alert('Error', 'Hubo un error al actualizar el jugador. Por favor, inténtalo de nuevo.');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.pickerContainer}>
        <Text>Selecciona un jugador:</Text>
        <Picker
          selectedValue={selectedPlayer}
          onValueChange={(itemValue) => {
            setSelectedPlayer(itemValue);
            // Llena el formulario con la información del jugador seleccionado
            setNombre(itemValue.Nombre);
            setPos(itemValue.POS);
            setEdad(itemValue.Edad.toString());
            setEstatura(itemValue.Estatura.toString());
            setPeso(itemValue.Peso.toString());
            setNacionalidad(itemValue.Nacionalidad);
            setAp(itemValue.Ap.toString());
            setSub(itemValue.SUB.toString());
            setAta(itemValue.ATA.toString());
            setGa(itemValue.GA.toString());
            setAsi(itemValue.ASI.toString());
            setFc(itemValue.FC.toString());
            setFs(itemValue.FS.toString());
            setTa(itemValue.TA.toString());
            setTr(itemValue.TR.toString());
          }}>
          <Picker.Item label="-- Seleccione un jugador --" value={null} />
          {jugadores.map((jugador) => (
            <Picker.Item key={jugador.id} label={jugador.Nombre} value={jugador} />
          ))}
        </Picker>
      </View>
      {/* Formulario para editar la información del jugador */}
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
        keyboardType="numeric"
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
      <Button title="Enviar" onPress={handleUpdate} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  pickerContainer: {
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    padding: 8,
  },
});

export default UpdateScreen;
