import LayoutConfigTypes from "@/core/config/LayoutConfigTypes";

const config: LayoutConfigTypes = {
  themeName: "Metronic",
  themeVersion: "8.0.25",
  demo: "demo2",
  main: {
    type: "default",
    primaryColor: "#009EF7",
    logo: {
      dark: "/public/media/logos/logo-6.svg",
      light: "/public/media/logos/logo-6.svg",
    },
  },
  loader: {
    logo: "/public/media/logos/logo-6.svg",
    display: true,
    type: "spinner-logo",
  },
  scrollTop: {
    display: true,
  },
  header: {
    display: true,
    menuIcon: "font",
    width: "fixed",
    fixed: {
      desktop: true,
      tabletAndMobile: true,
    },
  },
  toolbar: {
    display: true,
    width: "fixed",
    fixed: {
      desktop: true,
      tabletAndMobile: true,
    },
  },
  aside: {
    display: true,
    theme: "dark",
    fixed: true,
    menuIcon: "svg",
    minimized: false,
    minimize: true,
    hoverable: true,
  },
  content: {
    width: "fixed",
  },
  footer: {
    width: "fixed",
  },
};

export default config;
