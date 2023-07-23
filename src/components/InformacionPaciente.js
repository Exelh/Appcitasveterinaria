import React from 'react'
import { Text, SafeAreaView, Pressable, View, StyleSheet } from 'react-native'
import {formatearFecha} from "../helpers"

const InformacionPaciente = ({paciente, setPaciente, setModalPaciente}) => {
  return (
  <SafeAreaView
    style={styles.contenedor}
  >

      <Text style={styles.titulo}>Información {""}
            <Text style={styles.tituloBold}>Paciente</Text>
      </Text>
      <View>
        <Pressable
          style={styles.btnVolver}
          onPress={()=>{
                setModalPaciente(false)
                setPaciente({})
            }}
        >
            <Text
                style={styles.btnVolverTexto}
            >CERRAR</Text>
        </Pressable>
    </View>
    <View
       style={styles.contenido}
    >
        <View style={styles.campo}>
             <Text style={styles.label}>Nombre:  </Text>
             <Text style={styles.valor}>{paciente.paciente}</Text>
        </View>
        <View style={styles.campo}>
             <Text style={styles.label}>Propietario:  </Text>
             <Text style={styles.valor}>{paciente.propietario}</Text>
        </View>
        <View style={styles.campo}>
             <Text style={styles.label}>Email:  </Text>
             <Text style={styles.valor}>{paciente.email}</Text>
        </View>
        <View style={styles.campo}>
             <Text style={styles.label}>Fecha Alta:  </Text>
             <Text style={styles.valor}>{formatearFecha(paciente.date)}</Text>
        </View>
        <View style={styles.campo}>
             <Text style={styles.label}>Sintomas:  </Text>
             <Text style={styles.valor}>{paciente.sintomas}</Text>
        </View>
    </View>
     
  </SafeAreaView>   
 
  )
}

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: "#F0F2F5", // Color de fondo: Amarillo suave
    flex: 1,
    padding: 20,
  },
  titulo: {
    fontSize: 30,
    fontWeight: "600",
    textAlign: "center",
    marginTop: 30,
    color: "#334155", // Color del texto del título: Blanco
  },
  tituloBold: {
    fontWeight: "900",
  },
  btnVolver: {
    marginVertical: 10,
    backgroundColor: "#6C63FF", // Color del botón: Rojo oscuro
    marginHorizontal: 30,
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
  },
  btnVolverTexto: {
    color: "#FFFFFF", // Color del texto del botón: Blanco
    textAlign: "center",
    fontWeight: "600",
  },
  contenido: {
    backgroundColor: "#F3DBDB", // Color de fondo del contenido: Rosa claro
    marginHorizontal: 30,
    marginTop: 25,
    padding: 20,
    borderRadius: 10,
    marginBottom: 5,
    color: "#334155", // Color del texto principal: Azul oscuro
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  campo: {
    marginBottom: 15,
  },
  label: {
    textTransform: "uppercase",
    color: "#8E8E8E", // Color del texto de la etiqueta: Gris medio
    fontWeight: "700",
    fontSize: 14,
    marginBottom: 5,
  },
  valor: {
    color: "#334155", // Color del texto del valor: Azul oscuro
    fontWeight: "500",
    fontSize: 18,
  },
})
export default InformacionPaciente
