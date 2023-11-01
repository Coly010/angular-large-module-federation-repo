import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'remote60',
  exposes: {
    './Module': 'apps/remotes/remote60/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
