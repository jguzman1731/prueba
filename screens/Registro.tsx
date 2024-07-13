import { StyleSheet, View ,TextInput ,Button, Text} from 'react-native'
import React, { useState } from 'react'
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

export default function Registro({ navigator }: any) {

    const [nick, setNick] = useState("")
    const [Correo, setCorreo] = useState("")
    const [Edad, setEdad] = useState("")
    const [Contrasenia, setContrasenia] = useState("")

    
    const handleRegister = () => {
        auth()
          .createUserWithEmailAndPassword(Correo, Contrasenia)
          .then(() => {
            const reference = database().ref(`/users/${nick}`);
            reference.set({ Correo, Edad });
            navigator.navigate('Login');
          })
          .catch(error => {
            if (error.code === 'auth/email-already-in-use') {
              alert('El correo ya está en uso.');
            } else {
              alert('Ocurrió un error.');
            }
          });
      };
    

    return (
        <View style={styles.container}>
            <Text>Registro</Text>
            <TextInput
            placeholder="Nick" onChangeText={setNick}/>
            <TextInput
            placeholder="Email" onChangeText={setCorreo}
            keyboardType ="Correo"
            />
            <TextInput
            placeholder="Edad" onChangeText={setEdad}
            keyboardType ="numerico"
            />
            <TextInput
            placeholder="Contrasenia" onChangeText={setContrasenia}
            secureTextEntry/>
            <Button title="Registrarse" onPress={handleRegister} />
        </View>
    ) 
};

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
        },
      });
