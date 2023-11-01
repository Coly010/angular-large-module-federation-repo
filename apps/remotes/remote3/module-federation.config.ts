import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'remote3',
  exposes: {
    './Module': 'apps/remotes/remote3/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
