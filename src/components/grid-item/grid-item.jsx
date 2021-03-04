import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types'

const defaultGrid = ({ children, ...props }) => (
  <Grid
    item
    {...props}
  >
    {children}
  </Grid>
)

export default defaultGrid;