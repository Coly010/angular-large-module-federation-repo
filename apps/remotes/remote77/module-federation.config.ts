import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'remote77',
  exposes: {
    './Module': 'apps/remotes/remote77/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
