const theme = require("../theme");

// Merge Conflicts
// https://code.visualstudio.com/docs/getstarted/theme-color-reference#_merge-conflicts

module.exports = {
  "merge.currentHeaderBackground": theme.background,
  "merge.currentContentBackground": theme.background,
  "merge.incomingHeaderBackground": theme.background,
  "merge.incomingContentBackground": theme.background,
  "merge.border": theme.transparent,
  "editorOverviewRuler.currentContentForeground": theme.redMuted,
  "editorOverviewRuler.incomingContentForeground": theme.redMuted
};
