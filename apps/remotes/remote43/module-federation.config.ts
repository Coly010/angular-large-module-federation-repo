import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'remote43',
  exposes: {
    './Module': 'apps/remotes/remote43/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
