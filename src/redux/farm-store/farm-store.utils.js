import { groupBy } from "lodash";

export const convertFarmProduceArrayToObject = (farmProduceArray) => {
  const categoriesObject = groupBy(farmProduceArray, "category");

  const categoriesKeyNames = Object.keys(categoriesObject);
  return categoriesKeyNames.map((category) => {
    return {
      id: category,
      routeName: encodeURI(category.toLowerCase()),
      title: category,
      items: categoriesObject[category],
    };
  });
};
