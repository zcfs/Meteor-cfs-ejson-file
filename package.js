Package.describe({
  git: 'https://github.com/CollectionFS/Meteor-cfs-ejson-file.git',
  name: 'cfs:ejson-file',
  version: '0.1.3',
  summary: 'CollectionFS, FS.File as EJSON type'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.use([
    // CFS
    'cfs:base-package@0.0.27',
    'cfs:file@0.1.14',
    // Core
    'ejson'
  ]);

  api.addFiles([
    'fsFile-ejson.js',
  ], 'client');

  api.addFiles([
    'fsFile-ejson.js',
  ], 'server');
});

Package.onTest(function (api) {
  api.use('cfs:ejson-file');
  api.use('test-helpers', 'server');
  api.use(['tinytest', 'underscore', 'ejson', 'ordered-dict',
           'random', 'deps']);

  api.addFiles('tests/client-tests.js', 'client');
  api.addFiles('tests/server-tests.js', 'server');
});
