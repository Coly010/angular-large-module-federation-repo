import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'remote52',
  exposes: {
    './Module': 'apps/remotes/remote52/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
