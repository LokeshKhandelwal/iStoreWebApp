import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { colors, defaultStyles, formHeading, inputOptions, formStyles as styles } from '../styles/styles'
import { Button, TextInput } from 'react-native-paper';
import Header from '../components/Header';
const ChangePassword = ({ navigation }) => {
    const [newPassword, setNewPassword] = useState("");
    const [oldpassword, setOldPassword] = useState("");
    const submitHandler = () => {
        alert("Yeah")
    }
    const loading = false;

    return (

        <View style={{ ...defaultStyles, backgroundColor: colors.color2 }}>
            <Header back={true} />
            {/*Heading */}
            <View style={{ marginBottom: 20, paddingTop: 70 }}>
                <Text style={formHeading}>Change Password</Text>
            </View>
            <View style={styles.container}>
                
                <TextInput
                    {...inputOptions}
                    placeholder="Old Password"
                    secureTextEntry={true}
                    value={oldpassword}
                    onChangeText={setOldPassword}
                />
                <TextInput
                    {...inputOptions}
                    placeholder="New Password"
                    secureTextEntry={true}
                    value={newPassword}
                    onChangeText={setNewPassword}
                />
                
                <Button
                    textColor={colors.color2}
                    disabled={ oldpassword ===""||newPassword === ""}
                    onPress={submitHandler}
                    style={styles.btn}
                    loading={loading}
                >Change Password</Button>

                
            </View>

        </View>
    )
}

export default ChangePassword