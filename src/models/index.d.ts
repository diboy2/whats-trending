import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";

type FilterMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerFilter = {
  readonly id: string;
  readonly text?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyFilter = {
  readonly id: string;
  readonly text?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Filter = LazyLoading extends LazyLoadingDisabled ? EagerFilter : LazyFilter

export declare const Filter: (new (init: ModelInit<Filter, FilterMetaData>) => Filter) & {
  copyOf(source: Filter, mutator: (draft: MutableModel<Filter, FilterMetaData>) => MutableModel<Filter, FilterMetaData> | void): Filter;
}