/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import { SharedUxUserPermissionsService } from '@kbn/shared-ux-services';
import { KibanaPluginServiceFactory } from './types';
import { SharedUXPluginStartDeps } from '../types';

export type UserPermissionsServiceFactory = KibanaPluginServiceFactory<
  SharedUxUserPermissionsService,
  SharedUXPluginStartDeps
>;

/**
 * A factory function for creating a Kibana-based implementation of `SharedUXPermissionsService`.
 */
export const userPermissionsServiceFactory: UserPermissionsServiceFactory = ({ startPlugins }) => ({
  canCreateNewDataView: startPlugins.dataViewEditor.userPermissions.editDataView(),
});
