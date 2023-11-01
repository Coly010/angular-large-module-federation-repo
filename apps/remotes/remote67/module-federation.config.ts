import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'remote67',
  exposes: {
    './Module': 'apps/remotes/remote67/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
