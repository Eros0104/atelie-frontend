import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types'

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