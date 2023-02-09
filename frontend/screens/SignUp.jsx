import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { colors, defaultStyles, formHeading, inputOptions, formStyles as styles, defaultImg } from '../styles/styles'
import { Avatar, Button, TextInput } from 'react-native-paper';
import Footer from "../components/Footer"
const SignUp = ({ navigation }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [pincode, setPicode] = useState("");
    const [avatar, setAvatar] = useState("");

    const disableBtn = !name || !email || !password || !address || !city || !country || !pincode;

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
                    <Text style={formHeading}>Sign Up</Text>
                </View>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    style={{
                        padding: 20,
                        elevation: 10,
                        borderRadius: 10,
                        backgroundColor: colors.color3
                    }}
                >
                    <View style={{minHeight:900}}>
                        <Avatar.Image style={{
                            alignSelf: "center",
                            backgroundColor:colors.color1,
                        }} size={80}
                        source={{
                            uri:avatar?avatar:defaultImg,
                        }}/>

                        <TouchableOpacity onPress={()=>navigation.navigate("camera",{})}> 
                            <Button textColor={colors.color1}>Change Photo</Button>
                        </TouchableOpacity>
                        <TextInput
                            {...inputOptions}
                            placeholder="Name"
                            value={name}
                            onChangeText={setName}
                        />
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
                        <TextInput
                            {...inputOptions}
                            placeholder="Address"
                            value={address}
                            onChangeText={setAddress}
                        />
                        <TextInput
                            {...inputOptions}
                            placeholder="City"
                            value={city}
                            onChangeText={setCity}
                        />
                        <TextInput
                            {...inputOptions}
                            placeholder="Country"
                            value={email}
                            onChangeText={setCountry}
                        />
                        <TextInput
                            {...inputOptions}
                            placeholder="Pincode"
                            keyboardType="numeric"
                            value={pincode}
                            onChangeText={setPicode}
                        />




                        <Button
                            textColor={colors.color2}
                            disabled={disableBtn}
                            onPress={submitHandler}
                            style={styles.btn}
                            loading={loading}
                        >SignUp</Button>

                        <Text style={styles.or}>Or</Text>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => navigation.navigate("login")}
                        >
                            <Text style={styles.link}>LogIn</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>

            </View>
            <Footer activeRoute="profile" />
        </>
    )
}

export default SignUp