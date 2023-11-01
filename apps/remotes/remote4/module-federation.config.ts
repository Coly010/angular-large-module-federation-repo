import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'remote4',
  exposes: {
    './Module': 'apps/remotes/remote4/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
