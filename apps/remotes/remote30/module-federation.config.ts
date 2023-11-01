import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'remote30',
  exposes: {
    './Module': 'apps/remotes/remote30/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
