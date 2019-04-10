import * as yml from 'js-yaml';
import fs from 'fs';

const getWriteLocation = () =>
  process.env.STEBBY || 'stebby/current.yml'; // default

export const init = () => {
  const loc = getWriteLocation();
};
