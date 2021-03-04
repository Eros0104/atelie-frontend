import Grid from '@material-ui/core/Grid';

const defaultGrid = ({ children, ...props }) => (
  <Grid container {...props}>{children}</Grid>
)

export default defaultGrid;