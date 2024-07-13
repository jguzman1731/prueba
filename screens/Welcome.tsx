import { StyleSheet, Text, View ,Image, Button} from 'react-native'
import React from 'react'

export default function Welcome({navigator}:any) {
  return (
    <View style={styles.container} >
      <Text>Veronica Zambrano</Text>
      <Image source={{uri:'https://www.escueladesarts.com/wp-content/uploads/tipos-de-peliculas.jpg'}}/>
      <Button title='Login' onPress={()=> navigator.navigator('Login')}/>
      <Button title='Registro'onPress={()=> navigator.navigator('Registro')}/>
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

  