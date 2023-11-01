import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'remote36',
  exposes: {
    './Module': 'apps/remotes/remote36/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
