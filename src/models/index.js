// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { TrendingContent } = initSchema(schema);

export {
  TrendingContent
};