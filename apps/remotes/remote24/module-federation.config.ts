import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'remote24',
  exposes: {
    './Module': 'apps/remotes/remote24/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
