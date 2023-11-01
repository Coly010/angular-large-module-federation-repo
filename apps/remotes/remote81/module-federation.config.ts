import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'remote81',
  exposes: {
    './Module': 'apps/remotes/remote81/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
