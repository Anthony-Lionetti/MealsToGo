import camelize from "camelize";
import { locations } from "./location.mock";

export const locationRequest = (searchTerm) => {
  return new Promise((resolve, reject) => {
    const locationMock = locations[searchTerm];
    if (!locationMock) {
      reject("notfound");
    }
    resolve(locationMock);
  });
};

export const locationTransform = (result) => {
  const formattedResp = camelize(result);
  const { geometry = {} } = formattedResp.results[0];
  const { lat, lng } = geometry.location;

  return { lat, lng, viewport: geometry.viewport };
};
