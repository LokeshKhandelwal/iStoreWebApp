import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { colors, defaultStyles, formHeading, inputOptions, formStyles as styles } from '../styles/styles'
import { Button, TextInput } from 'react-native-paper';
import { useDispatch } from 'react-redux'
import Header from '../components/Header';
import { updatePassword } from '../redux/actions/otherAction';
import { useMessageAndErrorOther } from '../utils/hooks';
const ChangePassword = () => {
    const [newPassword, setNewPassword] = useState("");
    const [oldPassword, setOldPassword] = useState("");
    const dispatch = useDispatch();
    const loading = useMessageAndErrorOther(dispatch);
    const submitHandler = () => {
        dispatch(updatePassword(oldPassword, newPassword));
        setOldPassword("");
        setNewPassword("");
    }

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
                    value={oldPassword}
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
                    disabled={oldPassword === "" || newPassword === ""}
                    onPress={submitHandler}
                    style={styles.btn}
                    loading={loading}
                >Change Password</Button>


            </View>

        </View>
    )
}

export default ChangePassword