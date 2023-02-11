import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { colors, defaultStyles, formHeading } from '../styles/styles'
import Header from '../components/Header'
import Loader from '../components/Loader'
import { Headline } from 'react-native-paper'
import OrderItem from '../components/OrderItem'

export const orders = [
    {
        _id: "sdgsgdjdh",
        shippingInfo: {
            address: "73 east",
            city: "Las Angels",
            country: "USA",
            pincode: 301001
        },
        createdAt: "12-12-2022T3453",
        orderStatus: "Processing",
        paymentMethod: "COD",
        totalAmount: 30000
    },

    {
        _id: "sdgsgfsadjdh",
        shippingInfo: {
            address: "73 east",
            city: "Las Angels",
            country: "USA",
            pincode: 301001
        },
        createdAt: "12-12-2022T3453",
        orderStatus: "Processing",
        paymentMethod: "COD",
        totalAmount: 30000
    },

    {
        _id: "sdgsgdfsafjdh",
        shippingInfo: {
            address: "73 east",
            city: "Las Angels",
            country: "USA",
            pincode: 301001
        },
        createdAt: "12-12-2022T3453",
        orderStatus: "Processing",
        paymentMethod: "COD",
        totalAmount: 30000
    },
    {
        _id: "sdgsgdfssdaafjdh",
        shippingInfo: {
            address: "73 east",
            city: "Las Angels",
            country: "USA",
            pincode: 301001
        },
        createdAt: "12-12-2022T3453",
        orderStatus: "Processing",
        paymentMethod: "COD",
        totalAmount: 30000
    },
    {
        _id: "sdgsgddsafsafjdh",
        shippingInfo: {
            address: "73 east",
            city: "Las Angels",
            country: "USA",
            pincode: 301001
        },
        createdAt: "12-12-2022T3453",
        orderStatus: "Processing",
        paymentMethod: "COD",
        totalAmount: 30000
    },
]

const Orders = () => {
    const loading = false;
    return (
        <View style={{
            ...defaultStyles,
            backgroundColor: colors.color5
        }}>
            <Header back={true} />

            {/*Heading */}
            <View style={{ marginBottom: 20, paddingTop: 70 }}>
                <Text style={formHeading}>Orders</Text>
            </View>

            {
                loading ? <Loader /> : (
                    <View style={{
                        padding: 10,
                        flex: 1
                    }}>
                        <ScrollView showsVerticalScrollIndicator={false}>
                            {(
                                orders.length > 0
                                    ? orders.map((item, index) => (
                                        <OrderItem
                                            key={item._id}
                                            id={item._id}
                                            i={index}
                                            price={item.totalAmount}
                                            status={item.orderStatus}
                                            paymentMethod={item.paymentMethod}
                                            createdAt={item.createdAt}
                                            address={`${item.shippingInfo.address}, ${item.shippingInfo.city}, ${item.shippingInfo.country} ${item.shippingInfo.pincode}`}
                                            
                                        />
                                    ))
                                    : <Headline style={{ textAlign: "center" }}>No Orders Yet</Headline>
                            )}

                        </ScrollView>
                    </View>
                )
            }

        </View>
    )
}

export default Orders