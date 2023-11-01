import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'remote95',
  exposes: {
    './Module': 'apps/remotes/remote95/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
