import { View, Text } from 'react-native'
import React from 'react'

const Heading = ({text1="iStore",text2="",containerStyle}) => {
    return (
        <View style={containerStyle}>
            <Text style={{ fontSize: 25,fontWeight: "900" ,marginTop:-50}}>{text1}</Text>
            <Text style={{ fontSize: 25,  }}>{text2}</Text>
        </View>
    )
}

export default Heading