import classes from './QuoteSection.module.css';

export default function QuoteSection({ children }) {
  return <div className={classes.QuoteSectionContainer}>{children}</div>;
}
