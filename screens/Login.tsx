import { StyleSheet, TextInput, View, Text, Button } from 'react-native'
import React, { useState } from 'react';
import auth from '@react-native-firebase/auth';
export default function Login({ navigator }: any) {
    const [Correo, setCorreo] = useState('');
    const [Contrasenia, setContrasenia] = useState('');

    const handleLogin = () => {
        auth()
            .signInWithEmailAndPassword(Correo, Contrasenia)
            .then(() => {
                navigator.navigate('Perfil');
            })
            .catch(() => {
                alert('Credenciales incorrectas');
            });
    };
    return (
        <View style={styles.container}>
            <Text>Login</Text>
            <TextInput placeholder="Email"
             onChangeText={setCorreo} keyboardType="email-address" />
            <TextInput placeholder="Password" 
            onChangeText={setContrasenia} secureTextEntry />
            <Button title="Login" onPress={handleLogin} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });