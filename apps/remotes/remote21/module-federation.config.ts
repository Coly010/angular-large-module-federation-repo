import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'remote21',
  exposes: {
    './Module': 'apps/remotes/remote21/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
