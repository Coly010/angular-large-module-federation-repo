import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'remote2',
  exposes: {
    './Module': 'apps/remotes/remote2/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
