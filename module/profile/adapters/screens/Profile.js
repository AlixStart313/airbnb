import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image, Button } from "@rneui/base";

export default function Profile(props) {
  const { navigation } = props;
  return (
    <View style={styles.containerProfile}>
      <ScrollView style={styles.mx} centerContent={true}>
        <Image
          source={require("../../../../assets/profile.png")}
          resizeMode="contain"
          style={styles.img}
        />
        <Text style={styles.title}>Este sera tu perfil jeje :3</Text>
        <Text style={styles.bodyProfile}>Aqui estaran tus datos como nombre edad y parecidos :)</Text>
        <View style={styles.viewButtonContainer}>
          <Button
          title="Ver segunda parte del perfil"
          icon={{
            name:'account-heart',
            type:'material-community',
            size:15,
            color:'white'
          }}
          buttonStyles={styles.btn}
          containerStyles={styles.btnContainer}
          onPress={()=>navigation.navigate('RentsStack')}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
containerProfile:{
  backgroundColor:"'fff",
  height:"100%",
  flex:1,
  justifyContent:"center",
  alignItems:"center"
}, 
mx:{
  marginLeft:32,
  marginRight:32,
},
img:{
  marginTop:64,
  width:"100%",height:200
},
title:{
  fontWeight:'bold',
  fontSize:20,
  textAlign:"center",
  margin:16
},
bodyProfile:{
  textAlign:"center",
  marginBottom:16

},
viewButtonContainer:{
 flex:1,
 alignItems:'center'

},btn:{
  backgroundColor:'tomato',
  color:'#fff'
},
btnContainer:{
  width:"70%"
}

});
