import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'remote46',
  exposes: {
    './Module': 'apps/remotes/remote46/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
