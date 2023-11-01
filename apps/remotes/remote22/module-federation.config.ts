import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'remote22',
  exposes: {
    './Module': 'apps/remotes/remote22/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
