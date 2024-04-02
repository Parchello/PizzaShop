import Button from "@/src/components/Button";
import { defaultImage } from "@/src/components/ProductListItem";
import Colors from "@/src/constants/Colors";
import { useState } from "react";
import { View, Text, StyleSheet, TextInput, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Stack, useLocalSearchParams } from "expo-router";

const CreateProductScreen = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [errors, setErrors] = useState("");
  const [image, setImage] = useState<string | null>(null);

  const { id } = useLocalSearchParams();
  const isUpdating = !!id;

  const resetField = () => {
    setName("");
    setPrice("");
  };

  const viladateInput = () => {
    setErrors("");
    if (!name) {
      setErrors("Name is required");
      return false;
    }
    if (!price) {
      setErrors("Price is required");
      return false;
    }
    if (isNaN(parseFloat(price))) {
      setErrors("Price is required");
      return false;
    }
    return true;
  };

  const onCreate = () => {
    if (!viladateInput()) {
      return;
    }
    console.warn("Created product", name, price);
    //   тут буде збереження даних
    resetField();
  };

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.5,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{ title: isUpdating ? "Update product" : "Create product" }}
      />
      <Image source={{ uri: image || defaultImage }} style={styles.image} />
      <Text onPress={pickImage} style={styles.textButton}>
        Select Image
      </Text>
      <Text style={styles.label}>Pizza name</Text>
      <TextInput
        placeholder="Pizza name"
        style={styles.input}
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.label}>Price ($)</Text>
      <TextInput
        placeholder="9.99"
        style={styles.input}
        keyboardType="numeric"
        value={price}
        onChangeText={setPrice}
      />
      <Text style={styles.error}>{errors}</Text>
      <Button text={isUpdating ? "Update" : "Create "} onPress={onCreate} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "grey",
    flex: 1,
    justifyContent: "center",
    padding: 10,
  },
  label: {
    fontSize: 16,
  },
  input: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 8,
    marginTop: 5,
    marginBottom: 20,
  },
  error: {
    color: "red",
    fontSize: 20,
  },
  image: {
    width: "50%",
    aspectRatio: 1,
    alignSelf: "center",
  },
  textButton: {
    alignSelf: "center",
    fontWeight: "bold",
    color: Colors.light.tint,
    marginVertical: 10,
  },
});

export default CreateProductScreen;
