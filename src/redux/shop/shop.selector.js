import { createSelector } from "reselect";
const COLLECTION_ID_MAP={
    hats:1,
    sneakers:2,
    jackets:3,
    womens:4,
    mens:5
}
const selectShop=state=>state.shop

export const shopSelectorCollection=createSelector(
    [selectShop],
    shop=>shop.collection
)
export const CollectionObjToArry=createSelector(
    [shopSelectorCollection],
    collections=>Object.keys(collections).map(key=>collections[key])
)
export const selectCollection=collectionUrlParam=>createSelector(
    [shopSelectorCollection],
    collections=>collections[collectionUrlParam]
)