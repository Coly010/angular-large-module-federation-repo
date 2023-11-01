import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'remote45',
  exposes: {
    './Module': 'apps/remotes/remote45/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
