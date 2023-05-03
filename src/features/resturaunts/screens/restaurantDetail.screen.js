import React from "react";
import { RestaurantInfoCard } from "../components/restaurants-info-card.components";
import { SafeArea } from "../../../components/utility/safe-area.component";
import RestaurantMenu from "../components/restaurant-menu.component";

export default function RestaurantDetailScreen({ route }) {
  const { restaurant } = route.params;
  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
      <RestaurantMenu />
    </SafeArea>
  );
}
