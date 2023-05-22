
import { StyleSheet, Text, View ,SafeAreaView,TextInput,TouchableOpacity} from 'react-native'
import React, { useEffect, useState } from 'react'

import { db } from './config';
import { ref, onValue } from 'firebase/database';

export default function AllExpensive({navigation}) {
   const [todoData, setToData]=useState([])
   useEffect (() =>
   {
     const starCountRef = ref(db , 'posts/');
     onValue (starCountRef, (snapshot) =>
     {
       const data =snapshot.val ();
       const newPosts = Object.keys(data).map(key =>
       ({
         id:key,
         ...data[key]
 
       }));
       console.log(newPosts);
       setToData(newPosts);
   });
 
 
 } , [])
  return (
   <View style={styles.container}>
        <TextInput  style={{backgroundColor:'white',marginTop:5,padding:10,borderRadius:10,}}
           placeholder='Total'
           keyboardType='numeric'
           
           />
        {todoData.map((item, index) => {
           return (
              <View style={{backgroundColor:'#174059',marginTop:10,}} key={index}>
                 <Text style={{color:'white',padding:4,marginLeft:10,marginTop:3}}>
                 {item.body}
                 </Text>
                 <Text style={{color:'white',padding:4,marginLeft:10}}>
                    {item.title}
                 
                 </Text>
                 <View >
                 <Text  style={{textAlign:'right',backgroundColor:'white',marginLeft:'90%',padding:5,width:100,borderRadius:5,textAlign:'center'}}>
                 {item.value}
                 </Text>
               </View>
              </View>


           );
        })}
        <View style={styles.block2}>
           <TouchableOpacity
              style={styles.btn} onPress={() => {
                 navigation.navigate('AddExpensive');

              } }>
              <Text style={{ fontSize: 19,  }}>Add Expensive</Text>
           </TouchableOpacity>
        </View>
     </View>
 
  )
 }
const styles = StyleSheet.create({
   container:{
       backgroundColor:'skyblue',
       width:'100%',
       height:'120%',
       padding:40
       
      },
   block1:{
      marginTop: 20,

      margin:30,
      borderRadius:10,
      backgroundColor:"white"

   },
   block2:{
    marginTop:70,
    
      


 },
 btn:{
    backgroundColor:'#FCF6F6',
  
    width:'12%',
    height:50,
    marginLeft:660,
    padding:10,
    textAlign:'center',
    borderRadius:20,
   
 }
})