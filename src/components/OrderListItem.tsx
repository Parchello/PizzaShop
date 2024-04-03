import { View, Text, StyleSheet, Pressable } from "react-native";
import orders from "@/assets/data/orders";
import Colors from "../constants/Colors";
import { Order } from "../types";
import { Link, useSegments } from "expo-router";

type OrderListItemProps = {
  orders: Order;
};

const OrderListItem = ({ orders }: OrderListItemProps) => {
  const segments = useSegments();
  return (
    <Link href={`/${segments[0]}/orders/${orders.id}`} asChild>
      <Pressable style={styles.container}>
        <View style={styles.subContainer}>
          <Text style={styles.title}>Order #{orders.id}</Text>
          <Text>{orders.created_at}</Text>
        </View>
        <Text style={styles.status}>{orders.status}</Text>
      </Pressable>
    </Link>
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
