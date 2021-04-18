import * as React from "react";
import {
  Image,
  Platform,
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { MonoText } from "../components/StyledText";
import Coin from "../components/Coin";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

const BITCOINS_QUERY = gql`
  query Bitcoin($offset: Int, $limit: Int) {
    bitcoin(offset: $offset, limit: $limit) {
      name
      imageUrl
      symbol
      price
    }
  }
`;

export default function TabOneScreen(props) {
  const { navigation } = props;
  const { data, fetchMore, error } = useQuery(BITCOINS_QUERY, {
    variables: {
      offset: 0,
      limit: 10,
    },
    fetchPolicy: "cache-and-network",
  });

  if (!data || !data.bitcoin || error) {
    console.log("no bitcoin data!!", error);
    return <ActivityIndicator style={{ ...StyleSheet.absoluteFillObject }} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
        data={data.bitcoin}
        keyExtractor={(item, index) => `${index}`}
        renderItem={({ item, index }) => (
          <Coin
            coin={item}
            onPress={() => navigation.navigate("Detail", { coin: item })}
          />
        )}
        onEndReachedThreshold={0.9}
        onEndReached={() => {
          fetchMore({
            variables: {
              offset: data.bitcoin.length,
            },
            updateQuery: (prev, { fetchMoreResult }) => {
              if (!fetchMoreResult) return prev;
              return Object.assign({}, prev, {
                bitcoin: [...prev.bitcoin, ...fetchMoreResult.bitcoin],
              });
            },
          });
        }}
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
