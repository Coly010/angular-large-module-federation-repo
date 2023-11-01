import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'remote69',
  exposes: {
    './Module': 'apps/remotes/remote69/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
