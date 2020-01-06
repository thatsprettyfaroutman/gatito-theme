const theme = require("../theme");

// Editor Widget Colors
// https://code.visualstudio.com/docs/getstarted/theme-color-reference#_editor-widget-colors

module.exports = {
  "editorWidget.background": theme.background,
  "editorWidget.border": "#30373A",
  "editorSuggestWidget.background": theme.background,
  "editorSuggestWidget.border": "#30373A",
  "editorSuggestWidget.foreground": theme.foreground,
  // "editorSuggestWidget.highlightForeground": "#FF0000",
  "editorSuggestWidget.selectedBackground": "#30373A",
  "editorHoverWidget.background": theme.background,
  "editorHoverWidget.border": "#30373A",
  "debugExceptionWidget.background": theme.background,
  "debugExceptionWidget.border": "#30373A",
  "editorMarkerNavigation.background": theme.background,
  "editorMarkerNavigationError.background": theme.red,
  "editorMarkerNavigationWarning.background": theme.yellow
};
