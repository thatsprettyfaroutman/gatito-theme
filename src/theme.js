const chroma = require('chroma-js')

const BLACK = "#000"
const RED = "#E15A60"
const ORANGE = "#F99157"
const GREEN = "#99C794"
const YELLOW = "#FAC863"
const BLUE = "#6699CC"
const MAGENTA = "#C594C5"
const CYAN = "#5FB3B3"
const GRAY = "#444"
const WHITE = "#fff"



module.exports = {
  transparent: "#FFFFFF00",
  border: BLACK,

  background: BLACK,
  backgroundLight: chroma(BLACK).brighten().hex(),

  foreground: WHITE,
  foregroundMuted: chroma(WHITE).alpha(0.3).hex(),
  foregroundGhosted: chroma(WHITE).alpha(0.2).hex(),



  black: BLACK,
  blackMuted: chroma(BLACK).alpha(0.3).hex(),

  red: RED,
  redMuted: chroma(RED).alpha(0.3).hex(),

  orange: ORANGE,
  orangeMuted: chroma(ORANGE).alpha(0.3).hex(),

  green: GREEN,
  greenMuted: chroma(GREEN).alpha(0.3).hex(),

  yellow: YELLOW,
  yellowMuted: chroma(YELLOW).alpha(0.3).hex(),

  blue: BLUE,
  blueMuted: chroma(BLUE).alpha(0.3).hex(),

  magenta: MAGENTA,
  magentaMuted: chroma(MAGENTA).alpha(0.3).hex(),

  cyan: CYAN,
  cyanMuted: chroma(CYAN).alpha(0.3).hex(),

  gray: GRAY,
  grayMuted: chroma(GRAY).alpha(0.3).hex(),

  white: WHITE,
  whiteMuted: chroma(WHITE).alpha(0.3).hex()

};
