import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { colors, defaultStyles } from '../styles/styles'
import Header from '../components/Header'
import Heading from '../components/Heading'
import { Button } from 'react-native-paper'
import CartItem from '../components/CartItem'
import { useNavigation } from '@react-navigation/native'

export const cartItems = [
    {
        name: "Dog",
        image: "https://cdn.pixabay.com/photo/2017/10/24/18/43/man-2885709_960_720.png",
        product: "fsdsuagdfgdsa",
        stock: 3,
        price: 23950,
        quantity: 2
    },
    {
        name: "chain",
        image: "https://cdn.pixabay.com/photo/2017/10/24/18/43/man-2885709_960_720.png",
        product: "fsfasfgdfgdsa",
        stock: 5,
        price: 950,
        quantity: 1
    },
    {
        name: "chain",
        image: "https://cdn.pixabay.com/photo/2017/10/24/18/43/man-2885709_960_720.png",
        product: "fsffdsasfgdfgdsa",
        stock: 5,
        price: 950,
        quantity: 1
    },
    {
        name: "chain",
        image: "https://cdn.pixabay.com/photo/2017/10/24/18/43/man-2885709_960_720.png",
        product: "fsfsfdsasfgdfgdsa",
        stock: 5,
        price: 950,
        quantity: 1
    },
]

const Cart = () => {

    const navigate = useNavigation();

    const incrementHandler = (id, qty, stock) => {
        console.log("Incremented", id, qty, stock)
    }
    const decrementHandler = (id, qty) => {
        console.log("decremented", id, qty)
    }

    return (
        <View style={{
            ...defaultStyles,
            padding: 0

        }}>
            {/*Header */}
            <Header emptyCart={true} back={true} />

            {/*Heading */}
            <Heading
                text1='Shopping'
                text2='Cart'
                containerStyle={{ paddingTop: 70, marginLeft: 35 }}
            />
            <View style={{
                paddingVertical: 20,
                flex: 1
            }}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {
                        cartItems.map((i, index) => (
                            <CartItem
                                key={i.product}
                                id={i.product}
                                name={i.name}
                                stock={i.stock}
                                amount={i.price}
                                imgSrc={i.image}
                                index={index}
                                qty={i.quantity}
                                incrementHandler={incrementHandler}
                                decrementHandler={decrementHandler}
                            />
                        ))
                    }
                </ScrollView>
            </View>
            <View style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: 35,
            }}>
                <Text>5 items</Text>
                <Text>₹5</Text>
            </View>
            <TouchableOpacity onPress={cartItems.length > 0 ? () => navigate.navigate("confirmorder") : null}>
                <Button icon={"cart"} textColor={colors.color2}
                    style={{
                        backgroundColor: colors.color3,
                        borderRadius: 100,
                        padding: 5,
                        margin: 30
                    }}>CheckOut</Button>
            </TouchableOpacity>
        </View>
    )
}


export default Cart