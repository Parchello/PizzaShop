import { View, Text, StyleSheet } from "react-native";
import orders from "@/assets/data/orders";
import Colors from "../constants/Colors";

const OrderListItem = ({ orders }) => {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Text style={styles.title}>Order #{orders.id}</Text>
        <Text>{orders.created_at}</Text>
      </View>
      <Text style={styles.status}>{orders.status}</Text>
    </View>
  );
};

export default OrderListItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.light.text,
  },

  status: {
    color: Colors.light.tint,
    fontWeight: "bold",
  },
  subContainer: {},
});
