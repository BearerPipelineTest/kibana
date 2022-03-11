/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import { SharedUxEditorsService, ServiceFactory } from '@kbn/shared-ux-services';
import { action } from '@storybook/addon-actions';

export type SharedUXEditorsServiceFactory = ServiceFactory<SharedUxEditorsService>;

/**
 * A factory function for creating a storybook implementation of `SharedUXEditorsService`.
 */
export const editorsServiceFactory: SharedUXEditorsServiceFactory = () => ({
  openDataViewEditor: action('openEditor') as SharedUxEditorsService['openDataViewEditor'],
});
