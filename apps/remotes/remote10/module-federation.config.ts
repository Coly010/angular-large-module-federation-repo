import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'remote10',
  exposes: {
    './Module': 'apps/remotes/remote10/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
