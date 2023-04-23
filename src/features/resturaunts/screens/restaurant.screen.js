import React from "react";
import { Searchbar } from "react-native-paper";
import { View, FlatList } from "react-native";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { RestaurantInfoCard } from "../components/restaurants-info-card.components";
import styled from "styled-components/native";

const SearchView = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
    gap: 16,
  },
})``;

export const RestaurantScreen = () => (
  <SafeArea>
    <SearchView>
      <Searchbar />
    </SearchView>
    <RestaurantList
      data={[
        { name: 1 },
        { name: 2 },
        { name: 3 },
        { name: 4 },
        { name: 5 },
        { name: 6 },
      ]}
      renderItem={() => <RestaurantInfoCard />}
      keyExtractor={(item) => item.name}
    />
  </SafeArea>
);
