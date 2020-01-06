const theme = require("../theme");

// Diff Editor Colors
// https://code.visualstudio.com/docs/getstarted/theme-color-reference#_diff-editor-colors

module.exports = {
  "diffEditor.insertedTextBackground": theme.greenMuted,
  "diffEditor.insertedTextBorder": theme.transparent,
  "diffEditor.removedTextBackground": theme.redMuted,
  "diffEditor.removedTextBorder": theme.transparent
};
