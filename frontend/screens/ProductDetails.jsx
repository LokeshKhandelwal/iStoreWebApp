import { View, Text, Dimensions, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useRef, useState } from 'react'
import { colors, defaultStyles } from '../styles/styles';
import Header from '../components/Header';
import Carousel from 'react-native-snap-carousel';
import { Avatar, Button } from 'react-native-paper';
import { Toast } from 'react-native-toast-message/lib/src/Toast';

const SLIDER_WIDTH = Dimensions.get("window").width;
const ITEM_WIDTH = SLIDER_WIDTH;
export const iconOptions = {
    size: 20,
    style: {
        borderRadius: 5,
        backgroundColor: colors.color5,
        height: 25,
        width: 25
    }
}


const ProductDetails = ({ route: { params } }) => {
    console.log(params.id);

    const name = "Dog";
    const price = 23950;
    const description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quod nihil asperiores consequuntur iste veniam dolorum blanditiis necessitatibus sed saepe dolores, in modi, dignissimos ab ut qui! Qui consequatur dolor iure magnam ea eligendi doloremque aspernatur. Incidunt exercitationem, dicta esse et placeat architecto similique! Possimus molestiae sapiente explicabo porro minima magnam ullam placeat corrupti, repellat dolores necessitatibus totam esse cum corporis quisquam ipsa inventore amet sit, eos, odit dolorum distinctio error ea! Laborum numquam hic debitis, sed sequi porro maxime veniam harum fugiat error aliquid totam deleniti qui, fugit vero nesciunt illum impedit quidem ipsa facere excepturi dicta. Modi, amet?";
    const stock = 5;
    const [quantity, setQuantity] = useState(1);
    const isCarousel = useRef(null);


    const images = [
        {
            id: "asfhkasbvfsaly",
            url: "https://cdn.pixabay.com/photo/2017/10/24/18/43/man-2885709_960_720.png"
        },
        {
            id: "asfhkasbvfsaly",
            url: "https://cdn.pixabay.com/photo/2017/10/24/18/43/man-2885709_960_720.png"
        },
    ]

    const incrementQty = () => {
        if (quantity >= stock) {
            return;
        }
        setQuantity((prev) => prev + 1);
    };
    const decrementQty = () => {
        if (quantity <= 1) {
            return;
        }
        setQuantity((prev) => prev - 1);
    };

    const addToCardHandler = () => {
        if (stock === 0) return Toast.show({
            type: "error",
            text1: "Out Of Stock",
        });
        Toast.show({
            type:"success",
            text1:"Added to cart"
        })
    }

    return (
        <View style={{
            ...defaultStyles,
            padding: 0,
            backgroundColor: colors.color1
        }}>
            <Header back={true} />

            {/*CarouseL */}
            <Carousel
                layout="stack"
                sliderWidth={SLIDER_WIDTH}
                itemWidth={ITEM_WIDTH}
                ref={isCarousel}
                data={images}
                renderItem={CarouselCardItem}
            />
            <View style={{
                backgroundColor: colors.color2,
                padding: 35,
                flex: 1,
                marginTop: -380,
                borderTopLeftRadius: 60,
                borderTopRightRadius: 60
            }}>
                <Text numberOfLines={2} style={{
                    fontSize: 25,
                }}>{name}</Text>

                <Text style={{
                    fontSize: 18,
                    fontWeight: "900"
                }}>₹{price}</Text>
                <Text numberOfLines={8} style={{
                    letterSpacing: 1,
                    lineHeight: 20,
                    marginVertical: 15
                }}>{description}</Text>

                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingHorizontal: 5
                }}>
                    <Text style={{
                        color: colors.color3,
                        fontWeight: "100"
                    }}>Quantity</Text>

                    <View style={{
                        width: 80,
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}>
                        <TouchableOpacity onPress={decrementQty}>
                            <Avatar.Icon
                                icon={"minus"}
                                {...iconOptions}
                            />
                        </TouchableOpacity>
                        <Text style={style.quantity}>{quantity}</Text>
                        <TouchableOpacity onPress={incrementQty}>
                            <Avatar.Icon
                                icon={"plus"}
                                {...iconOptions}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity activeOpacity={0.85} onPress={addToCardHandler}>
                    <Button icon="cart" style={style.btnStyle}
                        textColor={colors.color2}
                    >
                        Add To Cart
                    </Button>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const CarouselCardItem = ({ item, index }) => (
    <View style={style.container} key={index} >
        <Image source={{ uri: item.url }} style={style.image} />
    </View>
)
const style = StyleSheet.create({
    container: {
        backgroundColor: colors.color1,
        width: ITEM_WIDTH,
        paddingVertical: 40,
        height: 380
    },
    image: {
        width: ITEM_WIDTH,
        resizeMode: "contain",
        height: 250,
    },
    quantity: {
        backgroundColor: colors.color4,
        height: 25,
        width: 25,
        textAlignVertical: "center",
        textAlign: "center",
        borderWidth: 1,
        borderRadius: 5,
        borderColor: colors.color5,
    },
    
    btnStyle: {
        backgroundColor: colors.color3,
        borderRadius: 69,
        padding: 5,
        marginVertical: 35
    }
})

export default ProductDetails