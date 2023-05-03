import { TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { FavoritesContext } from "../../services/favorites/favorites.context";
import { AntDesign } from "@expo/vector-icons";
import styled from "styled-components";

const FavoriteButton = styled(TouchableOpacity)`
  position: absolute;
  top: 25px;
  right: 25px;
  z-index: 9;
`;

export const Favorite = ({ restaurant }) => {
  const { favorites, addToFavorites, removeFromFavorites } =
    useContext(FavoritesContext);
  // Can be a bottleneck when lists are large
  const isFavorite = favorites.find((r) => r.placeId === restaurant.placeId);
  console.log(favorites.length);
  return (
    <FavoriteButton
      onPress={() =>
        !isFavorite
          ? addToFavorites(restaurant)
          : removeFromFavorites(restaurant)
      }
    >
      <AntDesign
        name={isFavorite ? "heart" : "hearto"}
        size={24}
        color={isFavorite ? "red" : "white"}
      />
    </FavoriteButton>
  );
};
