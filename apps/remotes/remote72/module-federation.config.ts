import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'remote72',
  exposes: {
    './Module': 'apps/remotes/remote72/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
