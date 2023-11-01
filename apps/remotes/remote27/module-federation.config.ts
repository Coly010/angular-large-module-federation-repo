import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'remote27',
  exposes: {
    './Module': 'apps/remotes/remote27/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
