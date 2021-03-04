import { colors, breakpoints } from '@assets';

const { xs, sm, md, lg, xl } = breakpoints;

const theme = {
  breakpoints: {
    values: {
      xs: xs,
      sm: sm,
      md: md,
      lg: lg,
      xl: xl,
    },
  },
  palette: {
    primary: {
      main: colors.primary
    }
  }
};

export default theme;
