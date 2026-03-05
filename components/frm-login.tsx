import { StyleSheet, View, Text, TextInput, TouchableOpacity, ToastAndroid} from "react-native";
import { useState } from "react";
import Toast from 'react-native-toast-message';

export default function LoginScreen(){

  const [usuario, setUsuario] = useState('')
  const [senha, setSenha] = useState('')

  function validarLogin(){
    if(usuario === 'admin' && senha === '123'){
      Toast.show({
        type:'success',
        text1:'success',
        text2:'success on login',
      })
      console.log(usuario);

    }else{
      Toast.show({
        type:'error',
        text1:'error',
        text2:'email or password is incorrect',
      })
      
    }
      
    
  }

  return(
    <View style={styles.container}>
      <Text style={styles.title}> tela de login </Text>
      
      
      <TextInput style={styles.input} 
      placeholder="email:"
      value={usuario}
      onChangeText={setUsuario} />

      <TextInput style={styles.input} 
      placeholder="senha:"
      value={senha}
      onChangeText={setSenha}
      secureTextEntry />

      <Toast />
      <TouchableOpacity style={styles.button} onPress={validarLogin}>
        <Text style={styles.title}>Login</Text>
      </TouchableOpacity>

    </View>
  );

}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'blue',
    alignItems:'center',
    justifyContent:'center',
    padding:30
    
  },
  title:{
    marginTop:10,
    fontSize:20,
    marginBottom:20,
    color:'black'
  },
  input:{
    width:'100%',
    height:40,
    backgroundColor:'#fff',
    padding:10,
    marginBottom:20,
  },
  button:{
    backgroundColor:'orange',
    width:'80%',
    height:40,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:5,
    marginBottom:20,
    
  }
})