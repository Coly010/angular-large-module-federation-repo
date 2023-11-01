import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'remote40',
  exposes: {
    './Module': 'apps/remotes/remote40/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
