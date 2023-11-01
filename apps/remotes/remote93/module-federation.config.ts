import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'remote93',
  exposes: {
    './Module': 'apps/remotes/remote93/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
