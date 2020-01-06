const chroma = require('chroma-js')

const BLACK = "#000000"
const RED = "#E15A60"
const ORANGE = "#F99157"
const GREEN = "#99C794"
const YELLOW = "#FAC863"
const BLUE = "#6699CC"
const MAGENTA = "#C594C5"
const CYAN = "#5FB3B3"
const GRAY = "#444"
const WHITE = "#fff"


const mute = color => chroma(color).alpha(0.3).hex()
const ghost = color => chroma(color).alpha(0.2).hex()

module.exports = {
  transparent: "#FFFFFF00",
  border: BLACK,

  background: chroma(BLACK).brighten(0.25).hex(),
  backgroundLight: chroma(BLACK).brighten().hex(),

  foreground: WHITE,
  foregroundMuted: mute(WHITE),
  foregroundGhosted: ghost(WHITE),



  black: BLACK,
  blackMuted: mute(BLACK),

  red: RED,
  redMuted: mute(RED),

  orange: ORANGE,
  orangeMuted: mute(ORANGE),

  green: GREEN,
  greenMuted: mute(GREEN),

  yellow: YELLOW,
  yellowMuted: mute(YELLOW),

  blue: BLUE,
  blueMuted: mute(BLUE),

  magenta: MAGENTA,
  magentaMuted: mute(MAGENTA),

  cyan: CYAN,
  cyanMuted: mute(CYAN),

  gray: GRAY,
  grayMuted: mute(GRAY),

  white: WHITE,
  whiteMuted: mute(WHITE)

};
