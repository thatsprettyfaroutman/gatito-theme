const theme = require("../theme");

// Editor Colors
// https://code.visualstudio.com/docs/getstarted/theme-color-reference#_editor-colors


module.exports = {
  "editor.background": theme.background,
  "editor.foreground": theme.foreground,
  "editorLineNumber.foreground": theme.backgroundLight,
  "editorLineNumber.activeForeground": "#f0f",
  "editorCursor.foreground": theme.foreground,
  "editor.selectionBackground": theme.foregroundMuted,
  "editor.selectionHighlightBackground": theme.foregroundGhosted,
  "editor.inactiveSelectionBackground": theme.foregroundGhosted,
  "editor.wordHighlightBackground": theme.transparent,
  "editor.wordHighlightStrongBackground": theme.transparent,
  "editor.findMatchBackground": theme.foregroundMuted,
  "editor.findMatchHighlightBackground": theme.foregroundGhosted,
  "editor.findRangeHighlightBackground": "#f0f",
  "editor.hoverHighlightBackground": theme.foregroundGhosted,
  "editor.lineHighlightBackground": theme.transparent,
  "editor.lineHighlightBorder": theme.transparent,
  "editorLink.activeForeground": theme.blue,
  "editor.rangeHighlightBackground": "#f0f",
  "editorWhitespace.foreground": theme.foregroundMuted,
  "editorIndentGuide.background": theme.foregroundGhosted,
  "editorIndentGuide.activeBackground": theme.backgroundLight,
  "editorRuler.foreground": theme.foregroundGhosted,
  "editorCodeLens.foreground": theme.backgroundLight,
  "editorBracketMatch.background": theme.transparent,
  "editorBracketMatch.border": theme.foregroundMuted,
  "editorOverviewRuler.border": theme.background,
  // "editor.stackFrameHighlightBackground": "red",
  // "editor.focusedStackFrameHighlightBackground": "red",

  "editorOverviewRuler.findMatchForeground": theme.foregroundGhosted,
  "editorOverviewRuler.rangeHighlightForeground": theme.foregroundGhosted,
  "editorOverviewRuler.selectionHighlightForeground": theme.foregroundGhosted,
  "editorOverviewRuler.wordHighlightForeground": theme.foregroundGhosted,
  "editorOverviewRuler.wordHighlightStrongForeground": theme.foregroundGhosted,
  "editorOverviewRuler.modifiedForeground": theme.blue,
  "editorOverviewRuler.addedForeground": theme.green,
  "editorOverviewRuler.deletedForeground": theme.red,
  "editorOverviewRuler.errorForeground": theme.red,
  "editorOverviewRuler.warningForeground": theme.yellow,
  "editorOverviewRuler.infoForeground": theme.blue,

  "editorError.foreground": theme.red,
  "editorError.border": theme.background,
  "editorWarning.foreground": theme.yellow,
  "editorWarning.border": theme.background,
  "editorGutter.background": theme.background,
  "editorGutter.modifiedBackground": theme.blue,
  "editorGutter.addedBackground": theme.green,
  "editorGutter.deletedBackground": theme.red
};
