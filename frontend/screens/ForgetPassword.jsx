import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { colors, defaultStyles, formHeading, inputOptions, formStyles as styles } from '../styles/styles'
import { Button, TextInput } from 'react-native-paper';
import Footer from "../components/Footer"
const ForgetPassword = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const submitHandler = () => {
        alert("Yeah")
        //Will remove this is future
        navigation.navigate("verify"); 
    }
    const loading = false;

    return (
        <>
            <View style={{ ...defaultStyles, backgroundColor: colors.color2 }}>

                {/*Heading */}
                <View style={{ marginBottom: 20 }}>
                    <Text style={formHeading}>Forget Password</Text>
                </View>
                <View style={styles.container}>
                    <TextInput
                        {...inputOptions}
                        placeholder="Email"
                        keyboardType="email-address"
                        value={email}
                        onChangeText={setEmail}
                    />




                    <Button
                        textColor={colors.color2}
                        disabled={email === ""}
                        onPress={submitHandler}
                        style={styles.btn}
                        loading={loading}
                    >Send OTP</Button>

                    <Text style={styles.or}>Or</Text>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => navigation.navigate("login")}
                    >
                        <Text style={styles.link}>LogIn</Text>
                    </TouchableOpacity>
                </View>

            </View>
            <Footer activeRoute="profile" />
        </>
    )
}

export default ForgetPassword