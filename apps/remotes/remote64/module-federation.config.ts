import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'remote64',
  exposes: {
    './Module': 'apps/remotes/remote64/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
