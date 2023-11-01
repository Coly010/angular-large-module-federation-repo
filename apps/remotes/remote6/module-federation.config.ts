import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'remote6',
  exposes: {
    './Module': 'apps/remotes/remote6/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
