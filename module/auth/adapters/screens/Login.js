import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React,{useState} from 'react'
import { ImageProps, Button,Image,Icon } from '@rneui/base'
import { isEmpty } from 'lodash';
import { Input } from '@rneui/base/dist';

export default function Login() {
    //Estos son getters y setters
    const [error, setError]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassWord]=useState('');
    const login = () =>{
      console.log('XDXDXD');
        if(!(isEmpty(email) || isEmpty(password))){
            console.log("listos para iniciar sesion");
            //aqui haremos la peticiona firebase para iniciar sesion
        }else{
            setError('Campo obligatorio');
        }
    }


  return (
    <View style={styles.container}>
      <ScrollView>
        <Image
        source={require('../../../../assets/profile.png')}
        resizeMode='contain'
        style={styles.logotype}
        />
        <Input 
        placeholder='Correo electronico'
        keyboardType='email-address'
        containerStyle={styles.input}
        onChange={(event)=> setEmail(event.nativeEvent.text)}
        errorMessage={error}
        />

        <Button
          title='iniciar sesion'
          icon={<Icon type='material-community'
          name='login'
          size={22}
          color='#fff'
          />
        }
        onPress={login}
        />
      </ScrollView>
    </View>
  )


}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#fff',
        height:"100%"
    },
    logotype:{
        width:"100%",
        height:150,
        marginTop:16,
        marginBottom:16
    },


})
