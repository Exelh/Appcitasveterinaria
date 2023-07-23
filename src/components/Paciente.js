import React from 'react'
import { Text, View, StyleSheet, Pressable } from 'react-native'
import {formatearFecha} from "../helpers"

const Paciente = ({
  item, 
  setModalVisible,
  setPaciente, 
  pacienteEditar, 
  pacienteEliminar, 
  setModalPaciente
}) => {
    const {paciente, date, id} = item

  return (
    <Pressable
      onPress={()=> {
        setModalPaciente(true)
        setPaciente(item)
      }}
    >
        <View style={styles.contenedor}>
            <Text style={styles.label}>PACIENTE:</Text>
            <Text style={styles.texto}>{paciente}</Text>
            <Text style={styles.fecha}>{formatearFecha(date)}</Text>

          <View style={styles.contenedorBotones}>
            <Pressable 
              style={[styles.btn, styles.btnEditar]}
              onPress={ () => {
                setModalVisible(true)
                pacienteEditar(id)
              }}
              
            >
              <Text style={styles.btnTexto}>Editar</Text>
            </Pressable>  
            
            <Pressable 
              style={[styles.btn, styles.btnEliminar]}
              onPress={() => pacienteEliminar(id)}
              >
              <Text style={styles.btnTexto}>Eliminar</Text>
            </Pressable>  
          </View> 
        </View>
    </Pressable>
    
  )
}
const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: "#85C1E9",
    padding: 20,
    borderRadius: 10,
    marginBottom: 5,
    color: "black",
    shadowColor: "#000",
    shadowOffset: {
        width: 20,
        height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 3.84,
    
    elevation: 5,
    


  },
  label:{
    fontWeight: "700",
    fontSize: 15,
    marginBottom: 5,
    color: "black",
    
  },
  texto:{
  color: "#6C63FF",
  fontSize: 20,
  fontWeight: "900", 
  marginBottom: 5,  

  },
  fecha: {
    color: "black",

  },  
  contenedorBotones:{
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    borderRadius: 15,
  },
  btn: {
    paddingHorizontal: 25,
    paddingVertical: 5,
    borderRadius: 5,

  },
  btnEditar:{

    backgroundColor: "#F0BC7A",

  },
  btnEliminar:{
    backgroundColor: "#F61F1F",

  },
  btnTexto:{
    fontWeight: "600",
    fontSize: 12,
    color: "white",

  },

})

export default Paciente
