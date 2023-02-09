import React from 'react'
import { ActivityIndicator } from 'react-native-paper'
import { colors } from '../styles/styles'

const Loader = () => {
  return (
    <ActivityIndicator style={{
        top:"50%",
        position:"absolute",
        alignSelf:"center"
    }}
    size={100}
    color={colors.color1_light2}
    />
  )
}

export default Loader