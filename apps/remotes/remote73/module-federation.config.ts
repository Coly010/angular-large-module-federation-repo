import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'remote73',
  exposes: {
    './Module': 'apps/remotes/remote73/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
