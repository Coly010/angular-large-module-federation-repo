import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'remote58',
  exposes: {
    './Module': 'apps/remotes/remote58/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
