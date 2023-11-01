import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'remote100',
  exposes: {
    './Module': 'apps/remotes/remote100/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
