/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

/**
 * TODO: `DataView` is a class exported by `src/plugins/data_views/public`.  Since this service
 * is contained in this package-- and packages should be stateless and shouldn't depend on
 * plugins-- we have to set this to `unknown`.  If and when `DataView` is exported from a
 * stateless package, we can remove this.
 */
type DataView = unknown;

/**
 * A subset of the `DataViewEditorOptions` interface relevant to our service and components.
 *
 * @see: src/plugins/data_view_editor/public/types.ts
 */
interface DataViewEditorOptions {
  onSave: (dataView: DataView) => void;
}

/**
 * A service providing methods to invoke and interact with various editors provided
 * in Kibana.
 */
export interface SharedUxEditorsService {
  openDataViewEditor: (options: DataViewEditorOptions) => () => void;
}
