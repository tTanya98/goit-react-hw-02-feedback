import PropTypes from 'prop-types';
import sty from './Section.module.css';

const Section = ({ title, children }) => {
  return (
    <section className={sty.section}>
      <h2 className={sty.title}>{title}</h2>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element,
};

export default Section;