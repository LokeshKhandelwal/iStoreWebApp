import { View, Text,  ScrollView } from 'react-native'
import React, { useState } from 'react'
import { colors, defaultStyles, formHeading, inputOptions, formStyles as styles } from '../styles/styles'
import { Button, TextInput } from 'react-native-paper';
import Header from '../components/Header';
const UpdateProfile = ({ navigation }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [pincode, setPicode] = useState("");

    const disableBtn = !name || !email  || !address || !city || !country || !pincode;

    const submitHandler = () => {
        alert("Yeah")
        //Will remove this is future
    }
    const loading = false;

    return (

        <View style={{ ...defaultStyles, backgroundColor: colors.color2 }}>
            <Header back={true}/>

            {/*Heading */}
            <View style={{ marginBottom: 20, paddingTop:70 }}>
                <Text style={formHeading}>Edit Profile</Text>
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
                <View >
                     
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
                        value={country}
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
                    >Update</Button>

                    
                </View>
            </ScrollView>

        </View>

    )
}

export default UpdateProfile