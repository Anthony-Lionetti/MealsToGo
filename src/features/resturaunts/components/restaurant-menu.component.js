import React, { useState } from "react";
import { List } from "react-native-paper";
import { ScrollView } from "react-native";

export default function RestaurantMenu() {
  const [breakfastExpand, setBreakfastExpand] = useState(false);
  const [lunchExpand, setLunchExpand] = useState(false);
  const [dinnerExpand, setDinnerExpand] = useState(false);
  const [drinksExpand, setDrinksExpand] = useState(false);

  return (
    <ScrollView>
      <List.Accordion
        title="Breakfast"
        id="1"
        left={(props) => <List.Icon {...props} icon="egg-fried" />}
        expanded={breakfastExpand}
        onPress={() => setBreakfastExpand(!breakfastExpand)}
      >
        <List.Item title="Eggs Benedict" />
        <List.Item title="Classic Breakfast" />
      </List.Accordion>
      <List.Accordion
        title="Lunch"
        id="2"
        left={(props) => (
          <List.Icon {...props} icon="food-takeout-box-outline" />
        )}
        expanded={lunchExpand}
        onPress={() => setLunchExpand(!lunchExpand)}
      >
        <List.Item title="Burger w/ Fries" />
        <List.Item title="Steak Sandwich" />
        <List.Item title="Mushroom Soup" />
      </List.Accordion>
      <List.Accordion
        title="Dinner"
        id="3"
        left={(props) => <List.Icon {...props} icon="food-outline" />}
        expanded={dinnerExpand}
        onPress={() => setDinnerExpand(!dinnerExpand)}
      >
        <List.Item title="Spaghetti Bolognese" />
        <List.Item title="Veal Cutlet with Chicken Mushroom Rotini" />
        <List.Item title="Steak Frites" />
      </List.Accordion>
      <List.Accordion
        title="Drinks"
        id="4"
        left={(props) => <List.Icon {...props} icon="cup-outline" />}
        expanded={drinksExpand}
        onPress={() => setDrinksExpand(!drinksExpand)}
      >
        <List.Item title="Coffee" />
        <List.Item title="Tea" />
        <List.Item title="Modelo" />
        <List.Item title="Coke" />
        <List.Item title="Fanta" />
      </List.Accordion>
    </ScrollView>
  );
}
