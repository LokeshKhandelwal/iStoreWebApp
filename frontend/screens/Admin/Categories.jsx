import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { colors, defaultStyles, formHeading, inputOptions } from '../../styles/styles'
import Header from '../../components/Header'
import { Avatar, Button, TextInput } from 'react-native-paper';

const categories = [
  {
    name: "Laptop",
    _id: "fusdhfisegtw"
  },
  {
    name: "Laptop",
    _id: "fusfisegtw"
  },
  {
    name: "Laptop",
    _id: "fusdhsegtw"
  },
  {
    name: "Laptop",
    _id: "fusdhfiegtw"
  },
];

const Categories = () => {

  const deleteHandler = (id) => {
    console.log("Deleting Category", id);
  };

  const [category, setCategory] = useState("");

  const submitHandler = () => {

  };
  
  const loading = false;

  return (
    <View style={{ ...defaultStyles, backgroundColor: colors.color5 }}>
      <Header back={true} />

      {/*Heading */}
      <View style={{ marginBottom: 20, paddingTop: 70 }}>
        <Text style={formHeading}>Categories</Text>
      </View>
      <ScrollView style={{
        marginBottom: 20,
      }}>
        <View style={{
          backgroundColor: colors.color2,
          padding: 20,
          minHeight: 400
        }}>
          {
            categories.map(i => (
              <CategoryCard name={i.name} id={i._id} key={i._id} deleteHandler={deleteHandler} />
            ))
          }

        </View>
      </ScrollView>
      <View style={styles.container}>
        <TextInput
          {...inputOptions}
          placeholder="Categories"
          value={category}
          onChangeText={setCategory}
        />
        <Button textColor={colors.color1} style={{
          backgroundColor: colors.color2,
          margin: 20,
          paddingHorizontal: 6,
          alignSelf:"center",
          width:100
        }}
          loading={loading}
          disabled={!category}
          onPress={submitHandler()}
        >Add</Button>
      </View>
    </View>
  )
}

const CategoryCard = ({ name, id, deleteHandler }) => <View style={styles.cardContainer}>
  <Text style={styles.cardText}>{name}</Text>
  <TouchableOpacity onPress={() => deleteHandler(id)}>
    <Avatar.Icon icon={"delete"} size={30} style={{
      backgroundColor: colors.color1,
    }} />
  </TouchableOpacity>
</View>;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    elevation: 10,
    borderRadius: 10,
    backgroundColor: colors.color3
  },
  cardContainer: {
    backgroundColor: colors.color2,
    elevation: 5,
    margin: 10,
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 10
  },
  cardText: {
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: 1
  }
})

export default Categories