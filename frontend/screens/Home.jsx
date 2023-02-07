import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { defaultStyles, colors } from '../styles/styles'
import Header from '../components/Header'
import { Avatar, Button } from 'react-native-paper'
import SearchModal from '../components/SearchModal'
import ProductCard from '../components/ProductCard'
import { useNavigation } from '@react-navigation/native'
import Footer from '../components/Footer'
const categories = [
    { category: "Nice", _id: "asfgasf" },
    { category: "Nice2", _id: "sadasds" },
    { category: "Nice2", _id: "qwregs" },
    { category: "Nice2", _id: "hgkghfj" },
    { category: "Nice2", _id: "gfdjshfh" },
    { category: "Nice2", _id: "sfg4res" },
    { category: "Nice3", _id: "shsrhy54j" }
];
const products = [
    {
        price: 23950,
        name: "Sample",
        stock: 1,
        _id: "fakgfewkl",
        images: [
            {
                url: "https://cdn.pixabay.com/photo/2017/10/24/18/43/man-2885709_960_720.png",
            },
        ],
    },
    {
        price: 23950,
        name: "Sample",
        stock: 1,
        _id: "fakgfaw3rwewkl",
        images: [
            {
                url: "https://cdn.pixabay.com/photo/2017/10/24/18/43/man-2885709_960_720.png",
            },
        ],
    },
    {
        price: 23950,
        name: "Sample",
        stock: 1,
        _id: "fakgfewfhskl",
        images: [
            {
                url: "https://cdn.pixabay.com/photo/2017/10/24/18/43/man-2885709_960_720.png",
            },
        ],
    },
    {
        price: 23950,
        name: "Sample",
        stock: 1,
        _id: "fakgfewfdskl",
        images: [
            {
                url: "https://cdn.pixabay.com/photo/2017/10/24/18/43/man-2885709_960_720.png",
            },
        ],
    },
    {
        price: 23950,
        name: "Sample",
        stock: 1,
        _id: "fakgfefawerwkl",
        images: [
            {
                url: "https://cdn.pixabay.com/photo/2017/10/24/18/43/man-2885709_960_720.png",
            },
        ],
    },

];
const Home = () => {

    const [category, setCategory] = useState("");
    const [activeSearch, setActiveSearch] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");


    const categoryButtonHandler = (id) => {
        setCategory(id);
    };

    const addToCartHandler = (id) => {
        console.log("Add to cart", id);
    }

    const navigate = useNavigation();

    return (
        <>

            {
                activeSearch && (
                    <SearchModal
                        searchQuery={searchQuery}
                        setSearchQuery={setSearchQuery}
                        setActiveSearch={setActiveSearch}
                        products={products}
                    />
                )
            }

            <View style={{ ...defaultStyles, flex: 1 }}>
                {/* Header*/}
                <Header />

                {/*Heading row*/}
                <View style={{
                    paddingTop: 70,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center"
                }}>
                    <View>
                        <Text style={{ fontSize: 25 }}>Our</Text>
                        <Text style={{ fontSize: 25, fontWeight: "900" }}>Product</Text>
                    </View>

                    {/*SearchBar*/}
                    <View>
                        <TouchableOpacity activeOpacity={1} onPress={() => setActiveSearch((prev) => !prev)}>
                            <Avatar.Icon
                                icon={"magnify"}
                                color={"gray"}
                                style={{ backgroundColor: colors.color2, elevation: 12 }}
                                size={50}
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                {/*Categories*/}


                <View style={{
                    flexDirection: "row",
                    height: 80,
                }}
                >
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{
                        alignItems: "center",

                    }}>
                        {
                            categories.map((item, index) => (
                                <Button
                                    key={item._id}
                                    style={{
                                        backgroundColor: category === item._id ? colors.color1 : colors.color5,
                                        borderRadius: 100,
                                        margin: 5
                                    }}
                                    onPress={() => categoryButtonHandler(item._id)}>
                                    <Text style={{
                                        fontSize: 12,
                                        color: category === item._id ? colors.color2 : "gray",

                                    }}>{item.category}</Text>
                                </Button>
                            ))
                        }
                    </ScrollView>
                </View>
                {/*Products*/}
                <View style={{ flex: 1 }}>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    >
                        {
                            products.map((item, index) => (
                                <ProductCard
                                    stock={item.stock}
                                    name={item.name}
                                    price={item.price}
                                    image={item.images[0]?.url}
                                    addToCartHandler={addToCartHandler}
                                    id={item._id}
                                    key={item._id}
                                    i={index}
                                    navigate={navigate}
                                />
                            ))
                        }
                    </ScrollView>

                </View>
            </View>

            <Footer activeRoute={"home"}/>
        </>
    )
}

export default Home 