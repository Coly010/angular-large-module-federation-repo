import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'remote56',
  exposes: {
    './Module': 'apps/remotes/remote56/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
