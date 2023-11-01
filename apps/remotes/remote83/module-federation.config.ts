import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'remote83',
  exposes: {
    './Module': 'apps/remotes/remote83/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
