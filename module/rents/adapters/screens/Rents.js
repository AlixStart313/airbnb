import { ScrollView,StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image} from "@rneui/base";

export default function Rents() {
  return (
    <View style={styles.containerProfile}>
      <ScrollView style={styles.mx} centerContent={true}>
        <Image
          source={require("../../../../assets/profile.png")}
          resizeMode="contain"
          style={styles.img}
        />
        <Text style={styles.title}>Esta es la segunda parte del perfil jeje :3</Text>
        <Text style={styles.bodyProfile}>Aqui estaran tus datos sobre las rentas que has tenido y parecidos :)</Text>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  img:{
    marginTop:64,
    width:"100%",height:200
  },title:{
    fontWeight:'bold',
    fontSize:20,
    textAlign:"center",
    margin:16
  },
  bodyProfile:{
    textAlign:"center",
    marginBottom:16
  
  },
})