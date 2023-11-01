import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'remote98',
  exposes: {
    './Module': 'apps/remotes/remote98/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
