const theme = require("../theme");

// Peek View Colors
// https://code.visualstudio.com/docs/getstarted/theme-color-reference#_peek-view-colors

module.exports = {
  "peekView.border": theme.border,
  "peekViewEditor.background": theme.background,
  "peekViewEditorGutter.background": theme.background,
  "peekViewEditor.matchHighlightBackground": "#FFFFFF1F",
  "peekViewResult.background": theme.background,
  "peekViewResult.fileForeground": theme.foreground,
  "peekViewResult.lineForeground": theme.foreground,
  "peekViewResult.matchHighlightBackground": "#FFFFFF1F",
  "peekViewResult.selectionBackground": "#30373A",
  "peekViewResult.selectionForeground": theme.foreground,
  "peekViewTitle.background": theme.background,
  "peekViewTitleDescription.foreground": theme.backgroundLight,
  "peekViewTitleLabel.foreground": theme.foreground
};
