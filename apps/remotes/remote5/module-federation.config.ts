import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'remote5',
  exposes: {
    './Module': 'apps/remotes/remote5/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
