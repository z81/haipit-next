import { types } from "mobx-state-tree";
import { SourceStore } from "./SourceStore";

export type NewsStoreType = typeof NewsStore["Type"]

export const NewsStore = types
  .model("NewsStore", {
    id: 1,
    title: "",
    link: "",
    url: "",
    createdAt: types.Date,
    description: types.maybeNull(types.string),
    source: SourceStore
  })