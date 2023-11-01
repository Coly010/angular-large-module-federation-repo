import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'remote70',
  exposes: {
    './Module': 'apps/remotes/remote70/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
