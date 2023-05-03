import PropTypes from 'prop-types';
import sty from './Notification.module.css';

const Notification = ({ message }) => {
  return <p className={sty.title}>{message}</p>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;