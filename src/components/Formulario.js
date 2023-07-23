import React, {useState, useEffect} from 'react'
import { Modal, Text, Button, SafeAreaView, StyleSheet, TextInput, View, ScrollView, Pressable, Alert, } from "react-native"
import DateTimePicker from '@react-native-community/datetimepicker';




const Formulario = ({
   modalVisible,
   cerrarModal,
   pacientes, 
   setPacientes, 
   paciente: pacienteObj, 
   setPaciente: setPacienteApp
}) => {

  const [paciente, setPaciente] = useState ('')
  const [id, setId] = useState ('')
  const [propietario, setpropietario] = useState ('')
  const [email, setEmail] = useState ('')
  const [telefono, setTelefono] = useState ('')
  const [sintomas, setSintomas] = useState ('')
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };
  useEffect(() => {
    if(Object.keys(pacienteObj).length > 0){
      setId(pacienteObj.id)
      setPaciente(pacienteObj.paciente)
      setpropietario(pacienteObj.propietario)
      setEmail(pacienteObj.email)
      setTelefono(pacienteObj.telefono)
      setSintomas(pacienteObj.sintomas)
      setDate(pacienteObj.date)

  
      }
  },[pacienteObj])
  

  const handleCita = () => {
    if([paciente, propietario, email, sintomas, date ].includes('')){
      Alert.alert(
        'Error',
        'Al menos uno de los campos obligatorios está vacio'
      )
      return 
    }

    // Revisar si es registro nuevo o edicion
    

    const nuevoPaciente = {
      paciente,
      propietario,
      email,
      telefono,
      sintomas,
      date,
    }

    if (id) {
      //edita registro
      nuevoPaciente.id = id

      const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id === nuevoPaciente.id ? nuevoPaciente : pacienteState)

      setPacientes(pacientesActualizados)
      setPacienteApp({})
      
    } else{
      //nuevo registro
      nuevoPaciente.id = Date.now()
      setPacientes([...pacientes, nuevoPaciente]);

    }

    cerrarModal()
    setId("")
    setPaciente('')
    setpropietario('')
    setEmail('')
    setTelefono('')
    setSintomas('')
    setDate(new Date())
  };
 

   return (
  <Modal
      
    animationType='slide'
    visible={modalVisible}
   >

      <SafeAreaView style={styles.contenido}>
        <ScrollView>
          <Text
              style={styles.titulo}
          >{pacienteObj.id ? 'Editar' : 'Nueva'} {''}
            <Text
              style={styles.tituloBold}
            >Cita</Text>
          </Text>

          <Pressable 
            style={styles.btnVolver}
            onPress={()=> {
              cerrarModal()
              setPacienteApp({})
              setId("")
              setPaciente('')
              setpropietario('')
              setEmail('')
              setTelefono('')
              setSintomas('')
              setDate(new Date())
            }}
            >
              <Text style={styles.btnVolverTexto}>VOLER AL MENÚ PRINCIPAL</Text>
          </Pressable>


          <View style={styles.campo}>
            <Text style={styles.label}>Nombre Paciente</Text> 
            <TextInput
                style={styles.input}
                placeholder='Ingrese Nombre Paciente'
                textColo
                placeholderTextColor={"grey"}
                color= "black"
                value={ paciente }
                onChangeText={ setPaciente }
              
            />
          </View>
          <View style={styles.campo}>
            <Text style={styles.label}>Nombre Propietario</Text> 
            <TextInput
                style={styles.input}
                placeholder='Ingrese Nombre Propietario'
                placeholderTextColor={"grey"}
                color= "black"
                value={ propietario }
                onChangeText={ setpropietario }
            />
          </View>
      
          <View style={styles.campo}>
            <Text style={styles.label}>Email Propietario</Text> 
            <TextInput
                style={styles.input}
                placeholder='Ingrese Email Propietario'
                placeholderTextColor={"grey"}
                keyboardType= "email-address" 
                color= "black"
                value={ email }
                onChangeText={ setEmail }
            />
          </View>

          <View style={styles.campo}>
            <Text style={styles.label}>Teléfono Propietario</Text> 
            <TextInput
                style={styles.input}
                placeholder='Ingrese Teléfono Propietario'
                placeholderTextColor={"grey"}
                keyboardType='phone-pad'
                color= "black"
                value={ telefono }
                onChangeText={ setTelefono }
                maxLength={11}
            />
          </View>
          <View style={styles.campo}>
            <Text style={styles.label}>Fecha Alta</Text> 
            <TextInput
              style={styles.label}
              value={date.toDateString()} // Mostrar la fecha seleccionada
              onFocus={() => setShowDatePicker(true)}
              placeholder="Seleccione fecha"
            />

            {showDatePicker && (
              <View style={styles.fechaContenedor}>
              <DateTimePicker
                value={date}
                locale="es"
                mode="date"
                display="default"
                onChange={handleDateChange}
              />
              </View>
            )}
          </View>

      
          
          <View style={styles.campo}>
            <Text style={styles.label}>Sintomas</Text> 
            <TextInput
                style={[styles.input, styles.sintomasInput]}
                placeholder='Ingrese síntomas paciente'
                placeholderTextColor={"grey"}
                color= "black"
                value={ sintomas }
                onChangeText={ setSintomas }
                multiline = {true}
                numberOfLines={4}
              
            />
          </View>
          <Pressable 
              style ={styles.btnNuevaCita}
              onPress={handleCita}
            >
              <Text style ={styles.btnNuevaCitaTexto}>{pacienteObj.id ? 'EDITAR' : 'AGREGAR'} PACIENTE</Text>
          </Pressable>
          
      </ScrollView>
      </SafeAreaView>
  </Modal>
  )
}

const styles = StyleSheet.create({
    contenido: {
      backgroundColor: "#EAEDED",
      flex: 1,
    },
    titulo: {
        fontSize: 30,
        fontWeight: "600",
        textAlign: "center",
        marginTop: 30,
        color: "#334155"
    },
    tituloBold: {
      fontWeight: "900",
    },
    btnVolver: {
      marginVertical: 10,
      backgroundColor: "#6C63FF",
      marginHorizontal: 30,
      padding: 15,
      borderRadius:10,
      borderWidth:1,
     },
    btnVolverTexto: {
      color: "white",
      textAlign: "center",
    },
    campo: {
      marginTop: 10,
      marginHorizontal: 30,
      

    },
    label: {
        color: "#334155",
        marginBottom: 10,
        marginTop: 15,
        fontSize: 20,
        fontWeight: "400",



    },
    input: {
      backgroundColor: "white",
      padding: 15,
      borderRadius: 10,
      

    },

    sintomasInput: {
      height: 100
      

    },
    fechaContenedor:{
      backgroundColor: "#black",
      borderRadius: 10,
    },
    btnNuevaCita:{

      marginVertical: 50,
      backgroundColor: "#28B463",
      marginHorizontal: 30,
      padding: 15,
      borderRadius:10,
      borderWidth:1,
    },
    btnNuevaCitaTexto:{
      color: "white",
      textAlign: "center",
    },



})

export default Formulario;
