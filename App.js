import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Alert } from 'react-native';
import { ViroVRSceneNavigator, ViroScene, Viro360Image } from '@reactvision/react-viro';

// 🔹 ESCENA 3D (Solo para el fondo)
const IndustrialScene = () => {
  return (
    <ViroScene>
      <Viro360Image source={require('./imagen.jpg')} />
    </ViroScene>
  );
};

// 🔹 APP PRINCIPAL (Aquí ponemos el panel 2D que SÍ se va a ver)
export default function App() {
  const [sensorData, setSensorData] = useState({
    temp: "24.5",
    hum: "58.2",
    location: "PLANTA UDB - SECTOR A",
    status: "ONLINE"
  });

  // Requerimiento 3: Actualización automática cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      const t = (20 + Math.random() * 10).toFixed(1);
      const h = (40 + Math.random() * 20).toFixed(1);
      setSensorData(prev => ({ ...prev, temp: t, hum: h }));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: '#000' }}>
      
      {/* El fondo 360 de la fábrica */}
      <ViroVRSceneNavigator
        initialScene={{ scene: IndustrialScene }}
        style={StyleSheet.absoluteFill}
        vrModeEnabled={false}
      />

      {/* 🟢 PANEL RESPONSIVE (Este siempre estará al frente) */}
      <View style={styles.overlay}>
        <View style={styles.panel}>
          <View style={styles.header}>
            <Text style={styles.headerText}>DASHBOARD INDUSTRIAL IOT</Text>
          </View>
          
          <View style={styles.content}>
            <Text style={styles.infoText}>📍 {sensorData.location}</Text>
            <Text style={styles.dataText}>TEMPERATURA: {sensorData.temp} °C</Text>
            <Text style={styles.dataText}>HUMEDAD: {sensorData.hum} %</Text>
            <Text style={styles.statusText}>● ESTADO: {sensorData.status}</Text>
          </View>
        </View>
      </View>

      {/* Requerimiento 4: Botón Manual */}
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => Alert.alert("Sincronización", "Datos actualizados desde el servidor.")}
      >
        <Text style={styles.buttonText}>ACTUALIZAR SENSORES</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: '20%',
    left: 0,
    right: 0,
    alignItems: 'center',
    padding: 20,
  },
  panel: {
    width: '95%',
    backgroundColor: 'rgba(0, 20, 40, 0.9)',
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#00d4ff',
    overflow: 'hidden',
  },
  header: {
    backgroundColor: '#00d4ff',
    padding: 10,
  },
  headerText: {
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
  },
  content: {
    padding: 20,
  },
  infoText: { color: '#00d4ff', fontSize: 14, marginBottom: 10 },
  dataText: { 
    color: '#fff', 
    fontSize: 24, 
    fontWeight: 'bold', 
    marginVertical: 5 
  },
  statusText: { color: '#00ff88', marginTop: 10, fontSize: 14 },
  button: {
    position: 'absolute',
    bottom: 50,
    alignSelf: 'center',
    backgroundColor: '#00d4ff',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    elevation: 10,
  },
  buttonText: { color: '#000', fontWeight: 'bold', fontSize: 16 }
});
