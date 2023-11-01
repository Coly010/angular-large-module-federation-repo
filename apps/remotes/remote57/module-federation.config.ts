import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'remote57',
  exposes: {
    './Module': 'apps/remotes/remote57/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
