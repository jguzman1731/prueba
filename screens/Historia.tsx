
import React, { useEffect, useState } from 'react';
import { StyleSheet,View, Text, Button, FlatList } from 'react-native';
interface ProductoData {
    titulo: string;
    anio: string;
    descripcion: string;
    imagen: string;
    url:string;
  }

  function Historia() {
    const [productos, setProductos] = useState<ProductoData[]>([]);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        fetch('https://jritsqmet.github.io/web-api/peliculas.json')
            .then(response => response.json())
            .then(data => setProductos(data));
    }, []);

    const handleNext = () => {
        setIndex((prevIndex) => (prevIndex + 1) % productos.length);
    };

    const handlePrevious = () => {
        setIndex((prevIndex) => (prevIndex - 1 + productos.length) % productos.length);
    };




    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
        },
    });
}
export default Historia;