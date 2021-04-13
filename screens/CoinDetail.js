import React from "react";
import {
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";

export default function CoinDetail(props) {
  const { params } = props.route;
  const { coin } = params;
  const { symbol, name, price, imageUrl } = coin;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.image} source={{ uri: imageUrl }} />
        <Text numberOfLines={1} style={styles.text}>
          {name} - {symbol}
        </Text>
      </View>

      <View style={styles.statsContainer}>
        <ScrollView>
          <View style={styles.statRow}>
            <Text style={styles.text}>Price</Text>
            <Text style={styles.text}>{price}</Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flex: 38,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 32,
    color: "#161616",
  },
  image: {
    width: 60,
    height: 60,
    resizeMode: "cover",
  },
  statsContainer: {
    flex: 62,
    backgroundColor: "#161616",
  },
  statRow: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  stat: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },
});
