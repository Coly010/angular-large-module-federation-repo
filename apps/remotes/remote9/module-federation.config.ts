import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'remote9',
  exposes: {
    './Module': 'apps/remotes/remote9/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
