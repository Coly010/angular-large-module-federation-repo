import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'remote86',
  exposes: {
    './Module': 'apps/remotes/remote86/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
