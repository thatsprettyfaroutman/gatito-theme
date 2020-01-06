const theme = require("../theme");
const chroma = require('chroma-js')


// Scroll Bar Control
// https://code.visualstudio.com/docs/getstarted/theme-color-reference#_scroll-bar-control

module.exports = {
  "scrollbar.shadow": theme.transparent,
  "scrollbarSlider.activeBackground": theme.foregroundGhosted,
  "scrollbarSlider.background": chroma(theme.foreground).alpha(0.05).hex(),
  "scrollbarSlider.hoverBackground": chroma(theme.foreground).alpha(0.1).hex()
};
