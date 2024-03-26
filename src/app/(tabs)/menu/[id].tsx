import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams, Stack } from "expo-router";

const ProductsDetailScreen = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Stack.Screen options={{ title: "Details:" + id }} />
      <Text style={{ color: "white" }}>ProductsDetailScreen go : ${id}</Text>
    </View>
  );
};

export default ProductsDetailScreen;
