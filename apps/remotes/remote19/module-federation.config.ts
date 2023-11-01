import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'remote19',
  exposes: {
    './Module': 'apps/remotes/remote19/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
