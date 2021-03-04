import Grid from '@material-ui/core/Grid';

const defaultGrid = ({ children, spacing }) => (
  <Grid container spacing={spacing}>{children}</Grid>
)

export default defaultGrid;