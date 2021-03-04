import Grid from '@material-ui/core/Grid';

const defaultGrid = ({ children, center, ...props }) => (
  <Grid
    style={{ textAlign: center ? "center" : "justify"}}
    item
    {...props}
  >
    {children}
  </Grid>
)

export default defaultGrid;