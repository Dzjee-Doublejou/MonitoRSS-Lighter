import { Options } from '@mikro-orm/core';
import config from './config';

const configVals = config();

const dbUri = configVals.FEED_REQUESTS_POSTGRES_URI;
const dbName = dbUri.split('/').pop();

const MikroOrmConfig: Options = {
  entities: ['dist/**/*.entity.js'],
  entitiesTs: ['src/**/*.entity.ts'],
  clientUrl: dbUri,
  type: (configVals.FEED_REQUESTS_DB_TYPE || 'postgresql') as Options['type'],
  forceUtcTimezone: true,
  timezone: 'UTC',
  dbName,
  ensureDatabase: true,
};

export default MikroOrmConfig;
