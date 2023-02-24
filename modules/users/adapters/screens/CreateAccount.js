import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { isEmpty, size } from "lodash";
import { Image, Input, Button, Icon } from "@rneui/base";
import Loading from "../../../../kernel/Component/Loading";
import { validateEmail } from "../../../../kernel/Validations";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import axios from "../../../../kernel/http-cliente.gateway";

//import AsyncStorage from '@react-native-async-storage/async-storage';

export default function CreateAccount() {
  const auth = getAuth();

  const payload = { email: "", password: "", repeatPassword: "" };
  const [show, setShow] = useState(false);
  const [error, setError] = useState(payload);
  const [data, setData] = useState(payload);
  const [showPassword, setShowPassword] = useState(true);
  const [showRepeatPassword, setShowRepeatPassword] = useState(true);

  const changePayload = (e, type) => {
    setData({ ...data, [type]: e.nativeEvent.text });
  };

  const createUser = () => {
    if (!(isEmpty(data.email) || isEmpty(data.password))) {
      if (validateEmail(data.email)) {
        if (size(data.password) >= 6) {
          if (data.password == data.repeatPassword) {
            console.log("CreateUser: Listo para iniciar sesion");
            setShow(true);
            createUserWithEmailAndPassword(auth, data.email, data.password)
              .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                (async () => {
                  try {
                    const object = {};
                    const response = await axios.doPost("/person", object);
                    console.log("serve", response);
                  } catch (error) {
                    setShow(false);
                    console.log("error", error);
                  }
                })();
                // ...
                console.log("usuario creado", user);
              })
              .catch((error) => {
                setShow(false);
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
              });
          } else {
            setError({
              email: "",
              password: "Las contraseñas deben coincidir",
              repeatPassword: "Las contraseñas deben coincidir",
            });
          }
        } else {
          setError({
            email: "",
            password: "Minimo 6 caracteres",
            repeatPassword: "Minimo 6 caracteres",
          });
        }
      } else {
        setError({
          email: "Email no valido",
          password: "",
          repeatPassword: "",
        });
      }
    } else {
      setError({
        email: "Campo obligatorio",
        password: "Campo obligatorio",
        repeatPassword: "Campoobligatorio",
      });
    }
  };
  return (
    <KeyboardAwareScrollView>
      <Image
        source={require("../../../../assets/logo.svg")}
        resizeMode="contain"
        style={styles.logo}
      />

      <View style={styles.viewForm}>
        <View style={styles.container}>
          <Input
            placeholder="Correo electronico"
            keyboardType="email-address"
            rightIcon={
              <Icon type="material-community" name="email-outline" size={22} />
            }
            containerStyles={styles.input}
            onChange={(e) => changePayload(e, "email")}
            errorMessage={error.email}
            autoCapitalize="none"
          />
          <Input
            placeholder="Contraseña"
            containerStyles={styles.input}
            rightIcon={
              <Icon
                type="material-community"
                name={showPassword ? "eye-off-outline" : "eye-outline"}
                size={22}
                onPress={() => setShowPassword(!showPassword)}
              />
            }
            secureTextEntry={showPassword}
            onChange={(e) => changePayload(e, "password")}
            errorMessage={error.password}
          />{" "}
          <Input
            placeholder="Repetir contraseña"
            containerStyles={styles.input}
            rightIcon={
              <Icon
                type="material-community"
                name={showRepeatPassword ? "eye-off-outline" : "eye-outline"}
                size={22}
                onPress={() => setShowRepeatPassword(!showRepeatPassword)}
              />
            }
            secureTextEntry={showRepeatPassword}
            onChange={(e) => changePayload(e, "repeatPassword")}
            errorMessage={error.repeatPassword}
          />{" "}
          <Button
            title="Crear cuenta"
            containerStyles={styles.btnContainer}
            buttonStyles={styles.btn}
            onPress={createUser}
          />{" "}
        </View>
      </View>

      <Loading show={show} text="Registrar usuario" />
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: "80%",
    height: 120,
    marginTop: 25,
    marginStart: 35,
  },
  viewForm: {
    marginHorizontal: 20,
  },

  container: {
    flex: 1,
    alignItems: "center",
    justifiContect: "center",
    marginTop: 20,
  },

  input: {
    width: "100%",
    marginVertical: 10,
  },

  btnContainer: {
    marginBottom: 20,
    width: "95%",
  },

  btn: {
    backgroundColor: "#28a745",
  },
});
