const theme = require("../theme");

// Status Bar Colors
// https://code.visualstudio.com/docs/getstarted/theme-color-reference#_status-bar-colors

module.exports = {
  "statusBar.background": theme.background,
  "statusBar.foreground": theme.backgroundLight,
  "statusBar.debuggingBackground": theme.background,
  "statusBar.debuggingForeground": theme.foreground,
  "statusBar.noFolderForeground": theme.backgroundLight,
  "statusBar.noFolderBackground": theme.background,
  "statusBarItem.activeBackground": theme.background,
  "statusBarItem.hoverBackground": theme.background,
  "statusBarItem.prominentBackground": theme.background,
  "statusBarItem.prominentHoverBackground": theme.background,
  "statusBar.border": theme.border
};
