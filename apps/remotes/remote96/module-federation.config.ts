import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'remote96',
  exposes: {
    './Module': 'apps/remotes/remote96/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
