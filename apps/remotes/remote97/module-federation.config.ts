import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'remote97',
  exposes: {
    './Module': 'apps/remotes/remote97/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
