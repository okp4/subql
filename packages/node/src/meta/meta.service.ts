// Copyright 2020-2022 OnFinality Limited authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { Injectable } from '@nestjs/common';
import {
  BaseMetaService,
  NodeConfig,
  StoreCacheService,
} from '@subql/node-core';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { version: polkadotSdkVersion } = require('@polkadot/api/package.json');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { version: packageVersion } = require('../../package.json');

@Injectable()
export class MetaService extends BaseMetaService {
  protected packageVersion = packageVersion;
  protected sdkVersion(): { name: string; version: string } {
    return { name: 'polkadotSdkVersion', version: polkadotSdkVersion };
  }
  constructor(storeCacheService: StoreCacheService, config: NodeConfig) {
    super(storeCacheService, config);
  }
}
