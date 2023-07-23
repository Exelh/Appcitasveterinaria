import React, { useState } from 'react';
import { 
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Button,
  Pressable,
  Modal,
  FlatList,
  Alert,
  ImageBackground,
  TouchableOpacity,
 
} from 'react-native'
import Formulario from './src/components/Formulario';
import Paciente from './src/components/Paciente';
import InformacionPaciente from './src/components/InformacionPaciente';

const App = () => {

  const [modalVisible, setModalVisible] = useState(false) 
  const [pacientes, setPacientes] = useState([])
  const [paciente, setPaciente] = useState({})
  const [modalPaciente, setModalPaciente] = useState(false)

  const pacienteEditar = id => {
    const pacienteEditar = pacientes.filter(paciente => paciente.id === id)
  
    setPaciente(pacienteEditar[0])
  }

  const pacienteEliminar = id => {
    Alert.alert(
      "¿Deseas eliminar éste paciente?",
      "Un paciente eliminado no se puede recuperar",
      [
        {text: "Cancelar"},
        {text: "Si, eliminar", onPress: () => {
          const pacientesActualizados = pacientes.filter(
            pacientesState => pacientesState.id !== id)
            setPacientes(pacientesActualizados)
        }}
      ]
    )
  }

  const cerrarModal = () => {
    setModalVisible(false)
  }


  return (


    <SafeAreaView style={styles.container}>
      <ImageBackground 
        source={require("./img/fondo.jpg")} // Ruta de la imagen en la carpeta assets
        style={styles.container}
    >
          <Text style={styles.titulo}>Administrador de citas {""}
            <Text style={styles.tituloBold}>Veterinaria</Text>
          </Text>
          <Pressable
            onPress={() => setModalVisible(!modalVisible) }
            style={styles.btnNuevaCita}
          >
            <Text
            style={styles.btnTextoNuevaCita}
          >Nueva Cita</Text>
          </Pressable>
          
          {pacientes.length === 0 ? 
          <Text style={styles.noPacientes}>No hay pacientes registrados</Text> : 
          
          <FlatList
          style={styles.listado}
          data={pacientes}
          keyExtractor={(item)=> item.id }
          renderItem={({item})=> {
            

            return(
              <Paciente
              item={item}
              setModalVisible={setModalVisible}
              setPaciente={setPaciente}
              pacienteEditar={pacienteEditar}
              pacienteEliminar={pacienteEliminar}
              setModalPaciente={setModalPaciente}
              />
            )
          }}
          
          />
          }
          {modalVisible && (
              <Formulario
                  cerrarModal={cerrarModal}
                  pacientes={pacientes}
                  setPacientes={setPacientes}
                  paciente={paciente}
                  setPaciente={setPaciente}
                
            />
          )}


          <Modal
            visible={modalPaciente}
            animationType='fade'
          >
              <InformacionPaciente
                paciente={paciente}
                setPaciente={setPaciente}
                setModalPaciente={setModalPaciente}
              />

          </Modal>
      </ImageBackground>
    </SafeAreaView>
   
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F2F5', // Fondo claro y suave
    paddingVertical: 20,
    paddingHorizontal: 25,
    resizeMode: 'cover',
    
  },
  titulo: {
    fontSize: 30,
    fontWeight: '600',
    textAlign: 'center',
    color: '#334155', // Color principal del título: Azul oscuro
  },
  tituloBold: {
    fontWeight: '900',
  },
  btnNuevaCita: {
    backgroundColor: '#6C63FF', // Color del botón "Nueva Cita": Azul
    borderRadius: 10,
    paddingVertical: 12,
    marginTop: 20,
  },
  btnTextoNuevaCita: {
    color: '#FFFFFF', // Color del texto del botón: Blanco
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
  noPacientes: {
    fontSize: 24,
    fontWeight: '600',
    color: '#334155', // Color del texto de aviso: Azul oscuro
    textAlign: 'center',
    marginTop: 40,
  },
  listado: {
    marginTop: 20,
  },
})
export default App;