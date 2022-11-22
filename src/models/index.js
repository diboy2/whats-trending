// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Filter } = initSchema(schema);

export {
  Filter
};