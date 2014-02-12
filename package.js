Package.describe({
  summary: 'CollectionFS, FS.File as EJSON type'
});

Package.on_use(function(api) {

  api.imply([
    'cfs-base-package',
    'cfs-file'
  ]);

  api.use(['deps', 'underscore', 'check', 'ejson']);

  api.add_files([
    'fsFile-ejson.js',
  ], 'client');

  api.add_files([
    'fsFile-ejson.js',
  ], 'server');
});

Package.on_test(function (api) {
  api.use('collectionFS');
  api.use('test-helpers', 'server');
  api.use(['tinytest', 'underscore', 'ejson', 'ordered-dict',
           'random', 'deps']);

  api.add_files('tests/client-tests.js', 'server');
  api.add_files('tests/server-tests.js', 'client');
});
