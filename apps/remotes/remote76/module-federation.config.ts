import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'remote76',
  exposes: {
    './Module': 'apps/remotes/remote76/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
