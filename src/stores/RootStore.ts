import { NewsListStore, NewsListStoreServices } from './NewsListStore';
import { types } from "mobx-state-tree"

export type RootStoreServices = NewsListStoreServices;

export type RootStoreType = ReturnType<typeof RootStore>["Type"]

export const RootStore = (service: RootStoreServices) => types
  .model("RootStore", {
    news: types.optional(NewsListStore(service), {})
  })