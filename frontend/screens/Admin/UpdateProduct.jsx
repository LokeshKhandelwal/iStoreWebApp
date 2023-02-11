import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { colors, defaultStyles, formHeading, inputOptions, inputStyling } from '../../styles/styles'
import Header from '../../components/Header'
import Loader from '../../components/Loader'
import { Button, TextInput } from 'react-native-paper'
import SelectComponent from '../../components/SelectComponent'

const UpdateProduct = ({ navigation, route }) => {
  const loading = false;
  const loadingOther = false;

  const images = [
    {
      url:"https://cdn.pixabay.com/photo/2017/10/24/18/43/man-2885709_960_720.png",
      _id:"oguihrsdoghy9"
    },
    {
      url:"https://cdn.pixabay.com/photo/2017/10/24/18/43/man-2885709_960_720.png",
      _id:"oguihrsadssadoghy9"
    },
    {
      url:"https://cdn.pixabay.com/photo/2017/10/24/18/43/man-2885709_960_720.png",
      _id:"oguasdihrsdoghy9"
    },
  ]


  const [id] = useState(route.params.id);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [category, setCategory] = useState("Laptop");
  const [categoryID, setCategoryID] = useState("");
  const [categories, setCategories] = useState([
    {_id:"fsaSfasga",category:"Laptop"},
    {_id:"fsafsaSfasga",category:"Footwear"},
    {_id:"safasfSfasga",category:"Dog"},
    {_id:"asfasfSfasga",category:"Clothes"},
  ]);
  const [visible, setVisible] = useState(false);

  const submitHandler = () => {
    console.log(name,description,price,stock,categoryID)
   }

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
                    images,
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