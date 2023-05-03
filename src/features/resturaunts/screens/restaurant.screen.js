import React, { useContext, useState } from "react";
import { ActivityIndicator } from "react-native-paper";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { RestaurantInfoCard } from "../components/restaurants-info-card.components";
import styled from "styled-components/native";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { FavoritesBar } from "../../../components/favorites/favorite-bar.component";
import { FavoritesContext } from "../../../services/favorites/favorites.context";
import { Spacer } from "../../../components/spacer/spacer.components";
import { Search } from "../components/search.components";

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
    gap: 16,
  },
})``;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

const LoadingContainer = styled(View)`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const RestaurantScreen = ({ navigation }) => {
  const { isLoading, restaurants } = useContext(RestaurantsContext);
  const [isToggled, setIsToggled] = useState(false);
  const { favorites } = useContext(FavoritesContext);

  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading
            size={50}
            animating={true}
            color={(props) => props.theme.colors.ui.primary}
          />
        </LoadingContainer>
      )}
      <Search
        isFavoritesToggled={isToggled}
        onFavoritesToggled={() => setIsToggled(!isToggled)}
      />
      {isToggled && (
        <FavoritesBar favorites={favorites} onNavigate={navigation.navigate} />
      )}
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantDetail", { restaurant: item })
              }
            >
              <Spacer position={"bottom"} size={"large"}>
                <RestaurantInfoCard restaurant={item} />
              </Spacer>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
