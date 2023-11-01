import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'remote13',
  exposes: {
    './Module': 'apps/remotes/remote13/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
