import Button from "@/src/components/Button";
import { View, Text, StyleSheet, TextInput } from "react-native";

const CreateProductScreen = () => {
  const onCreate = () => {
    console.warn("Created product");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Pizza name</Text>
      <TextInput placeholder="Pizza name" style={styles.input} />

      <Text style={styles.label}>Price ($)</Text>
      <TextInput
        placeholder="9.99"
        style={styles.input}
        keyboardType="numeric"
      />
      <Button text="Create product" onPress={onCreate} />
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
});

export default CreateProductScreen;
