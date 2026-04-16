# IOTARProject - Dashboard Industrial de Monitoreo IoT

Este proyecto es una aplicación móvil desarrollada con **React Native** y **ViroReact** para la visualización de datos de sensores IoT (Temperatura y Humedad) en un entorno inmersivo 3D/AR.

## 🚀 Requerimientos cumplidos
1. **Configuración del Entorno:** Expo SDK 51 + ViroReact.
2. **Panel Inmersivo:** Dashboard con diseño industrial que muestra métricas en tiempo real.
3. **Conexión IoT:** Actualización automática cada 5 segundos mediante una API simulada.
4. **Interacción:** Botón de actualización manual y visualización de estado/ubicación.

## 🛠️ Solución de Ingeniería (Hardware Fallback)
Debido a la fragmentación de hardware en dispositivos Android, el proyecto implementa un modo de **Realidad Virtual 360°**. Esto asegura que la aplicación sea funcional en dispositivos que no cuentan con soporte oficial para ARCore (como el Samsung A12), permitiendo la navegación del panel mediante el giroscopio del terminal.

## 📦 Instalación y Montaje
Para ejecutar este proyecto sin errores de compilación, siga estos pasos:

1. Clonar el repositorio:
   git clone https://github.com
   cd IOTARProject
   
2. Instalar dependencias:
   npm install --legacy-peer-deps
   
3.Configuración de Android SDK: 
  Es obligatorio crear el archivo android/local.properties y definir la ruta del SDK sin espacios para evitar errores de enlace en las librerías de C++:
  sdk.dir=C:/AndroidSDK (o la ruta correspondiente de su sistema).

4.Preparar el entorno nativo:
  npx expo prebuild

5. Ejecutar la aplicación:
   npx expo run:android
