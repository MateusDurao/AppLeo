import { StyleSheet, View, Text, TextInput, TouchableOpacity} from "react-native";



export default function LoginScreen(){
  return(
    <View style={styles.container}>
      <Text style={styles.title}> tela de login </Text>
      
      
      <TextInput style={styles.input}  />
      <TextInput style={styles.input}  />

      <TouchableOpacity style={styles.button}>
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