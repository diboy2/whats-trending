import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";

type TrendingContentMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerTrendingContent = {
  readonly id: string;
  readonly text?: string | null;
  readonly url?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTrendingContent = {
  readonly id: string;
  readonly text?: string | null;
  readonly url?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type TrendingContent = LazyLoading extends LazyLoadingDisabled ? EagerTrendingContent : LazyTrendingContent

export declare const TrendingContent: (new (init: ModelInit<TrendingContent, TrendingContentMetaData>) => TrendingContent) & {
  copyOf(source: TrendingContent, mutator: (draft: MutableModel<TrendingContent, TrendingContentMetaData>) => MutableModel<TrendingContent, TrendingContentMetaData> | void): TrendingContent;
}