import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'remote14',
  exposes: {
    './Module': 'apps/remotes/remote14/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
