import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'remote91',
  exposes: {
    './Module': 'apps/remotes/remote91/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
