import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { colors, defaultStyles, formHeading, inputOptions, inputStyling } from '../../styles/styles'
import Header from '../../components/Header'
import Loader from '../../components/Loader'
import { Button, TextInput } from 'react-native-paper'
import SelectComponent from '../../components/SelectComponent'
import { useMessageAndErrorOther, useSetCategories } from '../../utils/hooks'
import { useDispatch, useSelector } from 'react-redux'
import { useIsFocused } from '@react-navigation/native'
import { useEffect } from 'react'
import { getProductDetails } from '../../redux/actions/productAction'
import { updateProduct } from '../../redux/actions/otherAction'

const UpdateProduct = ({ navigation, route }) => {

  const isFocused = useIsFocused();
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);

  const { product, loading } = useSelector(state => state.product);

  const [id] = useState(route.params.id);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [category, setCategory] = useState("");
  const [categoryID, setCategoryID] = useState("");
  const [categories, setCategories] = useState([]);

  useSetCategories(setCategories, isFocused);
  
  const submitHandler = () => {
    dispatch(updateProduct(id, name, description, price, stock, categoryID));
  }

  const loadingOther = useMessageAndErrorOther(dispatch, navigation, "adminpanel");

  useEffect(() => {
    
    dispatch(getProductDetails(id));
  }, [dispatch, id, isFocused])

  useEffect(() => {
    if (product) {
      setName(product.name);
      setDescription(product.description);
      setPrice(String(product.price));
      setStock(String(product.stock));
      setCategory(product.category?.category);
      setCategoryID(product.category?._id);
    }
  }, [product])
  

  return (
    <>
      <View style={{
        ...defaultStyles,
        backgroundColor: colors.color5,
      }}>
        <Header back={true} />

        {/*Heading */}
        <View style={{ marginBottom: 20, paddingTop: 70 }}>
          <Text style={formHeading}>Update Product</Text>
        </View>

        {
          loading ? <Loader /> : (
            <ScrollView style={{
              padding: 20,
              elevation: 10,
              borderRadius: 10,
              backgroundColor: colors.color3
            }}>
              <View style={{
                justifyContent: "center",
                height: 650
              }}>
                <Button
                  onPress={() => navigation.navigate("productimages", {
                    id,
                    images:product.images,
                  })}
                  textColor={colors.color1}>Manage Images
                </Button>
                <TextInput
                  {...inputOptions}
                  placeholder="Name"
                  value={name}
                  onChangeText={setName}
                />
                <TextInput
                  {...inputOptions}
                  placeholder="Description"
                  value={description}
                  onChangeText={setDescription}
                />
                <TextInput
                  {...inputOptions}
                  placeholder="Price"
                  keyboardType="numeric"
                  value={price}
                  onChangeText={setPrice}
                />
                <TextInput
                  {...inputOptions}
                  placeholder="Stock"
                  keyboardType="numeric"
                  value={stock}
                  onChangeText={setStock}
                />
                <Text
                  style={{
                    ...inputStyling,
                    textAlign: "center",
                    borderRadius: 3,
                    textAlignVertical: "center"
                  }}
                  onPress={() => setVisible(true)}
                >
                  {category}
                </Text>
                <Button
                  textColor={colors.color2}
                  style={{
                    backgroundColor: colors.color1,
                    margin: 20,
                    padding: 6
                  }}
                  onPress={submitHandler}
                  loading={loadingOther}
                  disabled={loadingOther}
                >Update</Button>
              </View>
            </ScrollView>
          )
        }
      </View>

      <SelectComponent
        visible={visible}
        setVisible={setVisible}
        setCategory={setCategory}
        setCategoryID={setCategoryID}
        categories={categories}
      />
    </>

  )
}

export default UpdateProduct