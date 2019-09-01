import { types } from "mobx-state-tree";

export type NewsStoreType = typeof NewsStore["Type"]

export const NewsStore = types
  .model("NewsStore", {
    id: 1,
    title: "",
    link: "",
    url: "",
    description: types.maybeNull(types.string)
  })