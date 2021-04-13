import * as React from "react";
import {
  Image,
  Platform,
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  FlatList,
} from "react-native";
import { MonoText } from "../components/StyledText";
import Coin from "../components/Coin";

const coins = [
  {
    id: 1,
    name: "Bitcoin",
    symbol: "BTC",
    price: "$1,012",
    imageUrl: "",
  },
  {
    id: 2,
    name: "Ethereum",
    symbol: "ETH",
    price: "$186",
    imageUrl: "",
  },
];

export default function TabOneScreen(props) {
  const { navigation } = props;

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
        data={coins}
        keyExtractor={(item, index) => `${index}`}
        renderItem={({ item, index }) => (
          <Coin
            coin={item}
            onPress={() => navigation.navigate("Detail", { coin: item })}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#161616",
  },
  contentContainer: {
    paddingTop: 10,
    paddingBottom: 85,
  },
});
