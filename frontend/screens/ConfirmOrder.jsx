import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors, defaultStyles } from '../styles/styles'
import Header from '../components/Header'
import Heading from '../components/Heading'
import ConfirmOrderItem from '../components/ConfirmOrderItem'
import { cartItems } from './Cart'
import { useNavigation } from '@react-navigation/native'
import { Button } from 'react-native-paper'

const ConfirmOrder = () => {

    const navigate = useNavigation();

    const itemPrice = 4000;
    const shippingCharges = 200;
    const tax = 0.18 * itemPrice;
    const totalAmount = itemPrice + shippingCharges + tax;
    return (
        <View style={defaultStyles}>
            <Header back={true} />
            {/*Heading*/}
            <Heading
                text1='Confirm'
                text2='Order'
                containerStyle={{ paddingTop: 70 }}
            />
            <View
                style={{
                    paddingVertical: 20,
                    flex: 1,
                }}
            >
                <ScrollView>
                    {
                        cartItems.map(i => (
                            <ConfirmOrderItem
                                key={i.product}
                                image={i.image}
                                name={i.name}
                                price={i.price}
                                quantity={i.quantity}
                            />
                        ))
                    }
                </ScrollView>
            </View>
            <PriceTag heading={"Subtotal"} value={itemPrice} />
            <PriceTag heading={"Shipping"} value={shippingCharges} />
            <PriceTag heading={"Tax"} value={tax} />
            <PriceTag heading={"Total"} value={totalAmount} />
            <TouchableOpacity onPress={() => navigate.navigate("payment", { itemPrice, shippingCharges, tax, totalAmount })}>
                <Button
                    style={{
                        backgroundColor: colors.color3,
                        borderRadius: 100,
                        padding: 5,
                        margin: 10,
                    }}
                    textColor={colors.color2}
                    icon={"chevron-right"}
                >Payment</Button>
            </TouchableOpacity>
        </View>
    )
}

const PriceTag = ({ heading, value }) => (
    <View style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: 5
    }}>
        <Text style={{ fontWeight: "800" }}>{heading}</Text>
        <Text> ₹{value}</Text>
    </View>
)

export default ConfirmOrder