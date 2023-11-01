import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'remote23',
  exposes: {
    './Module': 'apps/remotes/remote23/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
