Package.describe({
  name: 'doedel:deck.js',
  summary: 'Deck.js - Modern HTML Presentations',
  version: '1.1.0',
  git: 'https://github.com/udiedrichsen/deck.js.git'
});

Package.onUse(function(api) {
  api.versionsFrom("1.0.1");
  api.use(["meteor"]);

  api.addFiles([
    "core/deck.core.css",
    "core/deck.core.js",
    "core/print.css",
    "core/print.css",
	], 'client');
});