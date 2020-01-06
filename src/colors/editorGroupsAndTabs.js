const theme = require("../theme");

// Editor Groups & Tabs
// https://code.visualstudio.com/docs/getstarted/theme-color-reference#_editor-groups-tabs

module.exports = {
  "editorGroup.border": theme.border,
  "editorGroup.dropBackground": theme.backgroundLight,
  "editorGroupHeader.noTabsBackground": "#f0f",
  "editorGroupHeader.tabsBackground": theme.background,
  "editorGroupHeader.tabsBorder": theme.border,
  "editorGroup.emptyBackground": theme.background,
  "editorGroup.focusedEmptyBorder": theme.border,
  "tab.activeBackground": theme.background,
  "tab.activeForeground": theme.foreground,
  "tab.border": theme.border,
  "tab.inactiveBackground": theme.background,
  "tab.inactiveForeground": theme.backgroundLight,
  "tab.unfocusedActiveForeground": theme.foreground,
  "tab.unfocusedInactiveForeground": theme.backgroundLight,
  "tab.hoverBackground": theme.background,
  "tab.unfocusedHoverBackground": theme.background,
  "tab.activeModifiedBorder": "#6699cc",
  "tab.inactiveModifiedBorder": "#5986B3",
  "tab.unfocusedActiveModifiedBorder": "#6699cc",
  "tab.unfocusedInactiveModifiedBorder": "#5986B3"
  // "tab.activeBorderTop": "#",
  // "tab.unfocusedActiveBorderTop": "#",
  // "tab.hoverBorder": "#30373A",
  // "tab.unfocusedHoverBorder": "#30373A",
  // "editor.selectionHighlightBorder": "#f00",
  // "editor.wordHighlightBorder": "#f00",
  // "editor.wordHighlightStrongBorder": "#f00",
  // "editor.findMatchBorder": theme.backgroundLight,
  // "editor.findMatchHighlightBorder": "#f09",
  // "editor.findRangeHighlightBorder": "#f00",
  // "editor.rangeHighlightBorder": "#f00",
};
