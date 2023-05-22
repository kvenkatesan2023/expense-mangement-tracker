import { StyleSheet, Text, TextInput, View ,} from 'react-native'
import React from 'react'
import { Button, SafeAreaView, TouchableOpacity, Image} from 'react-native-web'

export default function RecentExpensive({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.block1}>
      <TextInput style={{padding:10,borderRadius:10,}}
         placeholder='Last 7 Days..'
        

      />
       
    </View>
    <Image source={{uri:' https://assets.website-files.com/6364b6fd26e298b11fb9391f/6364b6fd26e298153ab93dbe_drawkit-tb-last.png'}}
       style={{width: 300, height: 300,marginLeft:400,marginTop: 70,}} />
       
    <View style={styles.block2}>
      <TouchableOpacity
    style={styles.btn}  onPress={() => {
              navigation.navigate('AllExpensive');
              
    }}>
      <Text style={{ fontSize:19,color:'black'}}>Show Expensive</Text>
      </TouchableOpacity>
     </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
   container:{
       backgroundColor:'skyblue',
       width:'100%',
       height:'100%',
      },
   block1:{
      marginTop: 20,

      margin:30,
      borderRadius:10,
      backgroundColor:'white'

   },
   block2:{
        marginTop:120,
        justifyContent:'flex-end',
        


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