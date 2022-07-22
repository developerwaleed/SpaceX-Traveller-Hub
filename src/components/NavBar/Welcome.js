import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

/* This example requires Tailwind CSS v2.0+ */
export default function Welcome(props) {
  const {
    title, title2, btn1, btn2,
  } = props;
  return (
    <div className="bg-center" style={{ marginTop: '9%' }}>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">{title}</span>
          <span className="block text-indigo-600">{title2}</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <NavLink
              to="/Rocket"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              {btn1}
            </NavLink>
          </div>
          <div className="ml-3 inline-flex rounded-md shadow">
            <NavLink
              to="/Mission"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
            >
              {btn2}
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

Welcome.propTypes = {
  title: PropTypes.string,
  title2: PropTypes.string,
  btn1: PropTypes.string,
  btn2: PropTypes.string,
};
Welcome.defaultProps = {
  title: 'Ready to dive in?',
  title2: 'Lets go for a mission, Boom!!.',
  btn1: 'Lets Fly',
  btn2: 'Join a Mission',
};
