import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'remote31',
  exposes: {
    './Module': 'apps/remotes/remote31/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
