import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView, TextInput, TouchableOpacity } from 'react-native-web'
import {db} from "./config"
import {ref,set} from 'firebase/database'

const AddExpensive = () => {
  const[value,setValue]=useState('');
  const[title,setTitle]=useState('');
  const[body,setBady]=useState('');
  
  const[error,setError]=useState('');
  const handlePress = () => {
    
    if (!value || !title || !body){
      setError("This feild  is required!");
    }
    else {
      setError(""); 
      Add();
    }
  };

const Add=()=>
{
  set(ref(db,'posts/'+body),{
      value:value,
      title:title,
      body:body,
  });
  setValue('')
  setTitle('')
  setBady('')
}


  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.block1}>
      <Text style={{textAlign:'center',marginTop:150,fontWeight:'bold',fontSize:40,color:'white'}}>Your Expense</Text>
      </View>
      
      <View style={styles.block2}>
      <Text style={{fontSize:20,fontFamily:'arial',}}>Amount</Text>
      <TextInput style={styles.input} 
          keyboardType="email-address"  
          mode="outlined"
          value={value}
          onChangeText={(text)=>setValue(text)}

          
          />
        {error ? <Text style={{ color: 'red', marginVertical: 10 }}>{error}</Text> : null}
      </View>
      <View style={styles.block3}>
      <Text style={{fontSize:20,fontFamily:'arial'}}>Date</Text>
      <TextInput style={styles.input1} 
      keyboardType="email-address"
      value={title}
      
      onChangeText={(text)=>setTitle(text)}
      
      />
        {error ? <Text style={{ color: 'red', marginVertical: 10 }}>{error}</Text> : null}
      </View>
      <View style={styles.block4}>
      <Text style={{fontSize:20,fontFamily:'arial'}}>Description</Text>
      <TextInput style={styles.input2} 
      keyboardType="email-address"
      multiline={true}
      value={body}
      onChangeText={(text)=>setBady(text)}
      
      />
        {error ? <Text style={{ color: 'red', marginVertical: 10 }}>{error}</Text> : null}
      </View>
      
      <View style={styles.block5}>
      <TouchableOpacity style={styles.btn} onPress={handlePress} >
        <Text style={{marginTop:8,fontSize:20,}}>Add</Text>
        </TouchableOpacity>
     
      </View>

    
     

    </SafeAreaView>
  )
}

export default AddExpensive

const styles = StyleSheet.create({
  container:{
    backgroundColor:'skyblue',
    width:'100%',
    height:'100%',
  },

  block2:{
    marginTop:50,
    padding:10,
    marginLeft:200,

  },
  input:{
    backgroundColor:'white',
    width:'12%',
    height:34,
    padding:10,
    margin:5,

  },
  block3:{
   marginLeft:'70%',
   marginVertical:-79,

  },
  input1:{
    backgroundColor:'white',
    width:'22%',
    height:34,
    padding:10,
    margin:5,
  },
  block4:{
    marginTop:120,
    marginLeft:200,

  },
  input2:{
    backgroundColor:'white',
    width:'80%',
    height:130,
    padding:10,
    margin:5,
  },
  block5:{
    marginLeft:20,
    marginTop:20,

  },
  block6:{
  
    marginVertical:-36,
  },
  btn:{
    backgroundColor:'#FCF6F6',
  
    width:'12%',
    height:50,
    marginLeft:600,
    padding:10,
    textAlign:'center',
    borderRadius:20,

   
 },
 btn1:{
  backgroundColor:'#174059',

  width:'12%',
  height:50,
  marginLeft:230,
  padding:10,
  textAlign:'center',
  borderRadius:20,
  marginVertical:-20,

 
}
})
