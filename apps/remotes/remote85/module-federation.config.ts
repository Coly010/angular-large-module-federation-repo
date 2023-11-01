import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'remote85',
  exposes: {
    './Module': 'apps/remotes/remote85/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
