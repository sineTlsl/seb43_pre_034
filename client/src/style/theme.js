const size = {
  mobile: "640px",
  tablet: "980px",
  desktop: "981px",
};
const breakpoints = {
  mobileMax: `screen and (max-width: ${size.mobile})`,
  tabletMax: `screen and (max-width: ${size.tablet})`,
  desktopMin: `screen and (min-width: ${size.desktop})`,
};

const color = {
  bg: "#FFFFFF",
  headerBg: "#F8F9F9",
  footerBg: "#242629",
};

const theme = {
  breakpoints,
  color,
};

export default theme;
