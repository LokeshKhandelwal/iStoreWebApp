import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { colors, defaultStyles, formHeading, inputOptions, formStyles as styles } from '../styles/styles'
import { Button, TextInput } from 'react-native-paper';
import Footer from "../components/Footer"
const Login = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const submitHandler = () => {
        alert("Yeah")
    }
    const loading = false;

    return (
        <>
            <View style={{ ...defaultStyles, backgroundColor: colors.color2 }}>

                {/*Heading */}
                <View style={{ marginBottom: 20 }}>
                    <Text style={formHeading}>Login</Text>
                </View>
                <View style={styles.container}>
                    <TextInput
                        {...inputOptions}
                        placeholder="Email"
                        keyboardType="email-address"
                        value={email}
                        onChangeText={setEmail}
                    />
                    <TextInput
                        {...inputOptions}
                        placeholder="Password"
                        secureTextEntry={true}
                        value={password}
                        onChangeText={setPassword}
                    />


                    <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate("forgetpassword")}>
                        <Text style={styles.forget}>Forget Password?</Text>
                    </TouchableOpacity>
                    <Button
                        textColor={colors.color2}
                        disabled={email === "" || password === ""}
                        onPress={submitHandler}
                        style={styles.btn}
                        loading={loading}
                    >Login</Button>

                    <Text style={styles.or}>Or</Text>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => navigation.navigate("signup")}
                    >
                        <Text style={styles.link}>Sign Up</Text>
                    </TouchableOpacity>
                </View>

            </View>
            <Footer activeRoute="profile" />
        </>
    )
}

export default Login