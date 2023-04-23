import { mocks } from "./mock";
import camelize from "camelize";

const restaurantsTransform = ({ results = [] }) => {
  const newResult = camelize(results.length);
  const mappedResults = results.map((restaurant) => {
    return {
      ...restaurant,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
    };
  });
  console.log(mappedResults);
  return newResult;
};
export const restaurantsRequest = (location = "37.7749295,-122.4194155") => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("not found");
    }
    resolve(mock);
  });
};

restaurantsRequest()
  .then(restaurantsTransform)
  .then((transformedRes) => {
    console.log(transformedRes);
  })
  .catch((err) => {
    console.log(err);
  });
