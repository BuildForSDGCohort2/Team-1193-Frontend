import { createSelector } from "reselect";

const selectFarmStore = (state) => state.farmStore;

export const selectFarmProduce = createSelector(
  [selectFarmStore],
  (farmStore) => (farmStore.farmProduce ? farmStore.farmProduce : null)
);

export const selectEachFarmProduce = (farmProduceUrlParam) =>
  createSelector([selectFarmProduce], (farmProduce) =>
    farmProduce
      ? farmProduce.find((produce) => produce.id === farmProduceUrlParam)
      : null
  );

export const selectIsFarmProduceLoaded = createSelector(
  [selectFarmStore],
  (farmStore) => !!farmStore.farmProduce
);
