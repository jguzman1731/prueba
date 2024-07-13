
import React, { useEffect, useState } from 'react';
import { StyleSheet,View, Text, Button, TextInput } from 'react-native';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';


function Perfil({navigator}:any) {
  const [userData, setUserData] = useState({});
  const [Edad, setEdad] = useState('');

  useEffect(() => {
    const user = auth().currentUser;
    const reference = database().ref(`/users/${""}`);
    reference.on('value', snapshot => {
      setUserData(snapshot.val());
    });
  }, []);

  const handleUpdate = () => {
    const user = auth().currentUser;
    const reference = database().ref(`/users/${""}`);
    reference.update({ Edad });
  };

  return (
    <View style={styles.container}>
      <Text>Nick: {userData.Nick}</Text>
      <Text>Email: {userData.Correo}</Text>
      <Text>Edad: {userData.Edad}</Text>
      <TextInput placeholder="Nueva Edad" onChangeText={setEdad} keyboardType="numeric" />
      <Button title="Actualizar Edad" onPress={handleUpdate} />
    </View>
  );
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  export default Perfil;