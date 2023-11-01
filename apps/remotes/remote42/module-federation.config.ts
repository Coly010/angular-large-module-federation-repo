import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'remote42',
  exposes: {
    './Module': 'apps/remotes/remote42/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
