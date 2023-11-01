import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'remote26',
  exposes: {
    './Module': 'apps/remotes/remote26/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
