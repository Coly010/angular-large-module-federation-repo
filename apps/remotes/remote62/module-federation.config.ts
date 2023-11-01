import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'remote62',
  exposes: {
    './Module': 'apps/remotes/remote62/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
