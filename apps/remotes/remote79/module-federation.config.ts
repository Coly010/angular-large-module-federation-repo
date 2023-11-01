import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'remote79',
  exposes: {
    './Module': 'apps/remotes/remote79/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
