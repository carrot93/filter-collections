Package.describe({
  summary: "Smart package for Meteor that adds filter and pager behavior to our Meteor's collections."
});

Package.on_use(function(api) {
  api.use('underscore', ['client', 'server']);

  api.add_files(['filter-collection-client.js'], ['client']);
});
