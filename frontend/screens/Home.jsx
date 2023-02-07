import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { defaultStyles, colors } from '../styles/styles'
import Header from '../components/Header'
import { Avatar, Button } from 'react-native-paper'
import SearchModal from '../components/SearchModal'
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
        _id: "fakgfewkl",
        images: [
            {
                url: "https://pixabay.com/get/g245297db7ec96515fdb0f3af69e7c73c4a031838bca12ad495af662d8b0c3be2f80d6ce2b0305bc79afb55b5d021c8073d83f2cafa44f8a5cd43c2c191a3bad1253040c4d12f1f7dba98b7bcd2ce8e11_1920.jpg",
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
                        <TouchableOpacity onPress={() => setActiveSearch((prev) => !prev)}>
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

            </View>
        </>
    )
}

export default Home