Package.describe({
  name: 'cfs:ejson-file',
  version: '0.0.0',
  summary: 'CollectionFS, FS.File as EJSON type'
});

Package.on_use(function(api) {
  api.versionsFrom('METEOR@0.9.1');

  api.use([
    // CFS
    'cfs:base-package@0.0.0',
    'cfs:file@0.0.0',
    // Core
    'ejson'
  ]);

  api.add_files([
    'fsFile-ejson.js',
  ], 'client');

  api.add_files([
    'fsFile-ejson.js',
  ], 'server');
});

Package.on_test(function (api) {
  api.use('cfs:ejson-file');
  api.use('test-helpers', 'server');
  api.use(['tinytest', 'underscore', 'ejson', 'ordered-dict',
           'random', 'deps']);

  api.add_files('tests/client-tests.js', 'client');
  api.add_files('tests/server-tests.js', 'server');
});
