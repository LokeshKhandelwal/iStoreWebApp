import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { colors, defaultStyles, formHeading } from '../../styles/styles'
import Header from '../../components/Header'
import Loader from '../../components/Loader'
import ButtonBox from '../../components/ButtonBox'
import ProductListHeading from '../../components/ProductListHeading'
import { products } from '../Home'
import ProductListItems from '../../components/ProductListItems'
import Chart from '../../components/Chart'

const AdminPanel = ({ navigation }) => {
    const loading = false;

    const navigationHandler = (text) => {
        switch (text) {
            case "Category":
                navigation.navigate("categories");
                break;
            case "All Orders":
                navigation.navigate("adminorders");
                break;
            case "Product":
                navigation.navigate("newproduct");
                break;

            default:
                navigation.navigate("adminorders");
                break;
        }
    };

    const deleteProductHandler = (id) => {
        console.log("Deleting product", id);
    }
    return (
        <View style={defaultStyles}>
            <Header back={true} />
            {/*Heading */}
            <View style={{ marginBottom: 20, paddingTop: 70 }}>
                <Text style={formHeading}>Admin Panel</Text>
            </View>

            {
                loading
                    ? (<Loader />)
                    : (
                        <>
                            <View style={{
                                backgroundColor: colors.color3,
                                borderRadius: 20,
                                alignItems: "center",
                                marginTop: -11

                            }}>
                                <Chart inStock={12} outOfStock={2} />
                            </View>
                            <View>
                                <View style={{
                                    flexDirection: "row",
                                    margin: 10,
                                    justifyContent: "space-between"
                                }}>

                                    <ButtonBox icon={"plus"} text={"Product"} handler={navigationHandler} />
                                    <ButtonBox icon={"format-list-bulleted-square"} text={"All Orders"} handler={navigationHandler} reverse={true} />
                                    <ButtonBox icon={"plus"} text={"Category"} handler={navigationHandler} />
                                </View>
                            </View>
                            <ProductListHeading />
                            <ScrollView showsVerticalScrollIndicator={false}>
                                <View>
                                    {
                                        products.map((item, index) => (
                                            <ProductListItems
                                                navigate={navigation}
                                                deleteHandler={deleteProductHandler}
                                                key={item._id}
                                                id={item._id}
                                                i={index}
                                                price={item.price}
                                                stock={item.stock}
                                                name={item.name}
                                                category={item.category}
                                                imgSrc={item.images[0].url}
                                            />
                                        ))
                                    }
                                </View>
                            </ScrollView>
                        </>
                    )
            }

        </View>
    )
}

export default AdminPanel