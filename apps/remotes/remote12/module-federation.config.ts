import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'remote12',
  exposes: {
    './Module': 'apps/remotes/remote12/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
