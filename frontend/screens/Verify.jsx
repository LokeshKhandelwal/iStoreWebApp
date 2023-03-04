import { View, Text, TouchableOpacity, TurboModuleRegistry } from 'react-native'
import React, { useState } from 'react'
import { colors, defaultStyles, formHeading, inputOptions, formStyles as styles } from '../styles/styles'
import { Button, TextInput } from 'react-native-paper';
import Footer from "../components/Footer"
import { useMessageAndErrorOther } from '../utils/hooks';
import { useDispatch } from 'react-redux';
import { resetPassword } from '../redux/actions/otherAction';
const Verify = ({ navigation }) => {
    const [otp, setOtp] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const loading = useMessageAndErrorOther(dispatch,navigation,"login");
    const submitHandler = () => {
        dispatch(resetPassword(otp,password));
    }


    return (
        <>
            <View style={{ ...defaultStyles, backgroundColor: colors.color2 }}>

                {/*Heading */}
                <View style={{ marginBottom: 20 }}>
                    <Text style={formHeading}>Reset Password</Text>
                </View>
                <View style={styles.container}>
                    <TextInput
                        {...inputOptions}
                        placeholder="OTP"
                        keyboardType="numeric"
                        value={otp}
                        onChangeText={setOtp}
                    />
                    <TextInput
                        {...inputOptions}
                        placeholder="New Password"
                        secureTextEntry={true}
                        value={password}
                        onChangeText={setPassword}
                    />




                    <Button
                        textColor={colors.color2}
                        disabled={otp === "" || password === ""}
                        onPress={submitHandler}
                        style={styles.btn}
                        loading={loading}
                    >Reset</Button>

                    <Text style={styles.or}>Or</Text>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => navigation.navigate("forgetpassword")}
                    >
                        <Text style={styles.link}>Resend OTP</Text>
                    </TouchableOpacity>
                </View>

            </View>
            <Footer activeRoute="profile" />
        </>
    )
}

export default Verify