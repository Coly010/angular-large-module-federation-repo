import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'remote94',
  exposes: {
    './Module': 'apps/remotes/remote94/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
