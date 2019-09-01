import { types } from "mobx-state-tree";

export type SourceStoreType = typeof SourceStore["Type"]

export const SourceStore = types
  .model("SourceStore", {
    title: "",
    shortName: "",
    imageUrl: types.maybeNull(types.string),
    imageTitle: ""
  })