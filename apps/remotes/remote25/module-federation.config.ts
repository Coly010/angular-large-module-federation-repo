import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'remote25',
  exposes: {
    './Module': 'apps/remotes/remote25/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
