import classes from './QuoteSection.module.css';
import PropTypes from 'prop-types';

export default function QuoteSection({ children }) {
  return <div className={classes.QuoteSectionContainer}>{children}</div>;
}

QuoteSection.propTypes = {
  children: PropTypes.node.isRequired,
};
