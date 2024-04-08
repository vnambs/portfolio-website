import PropTypes from 'prop-types';
import React from 'react';
import Typical from 'react-typical';
import ataglanceModule from './ataglance.module.css';

/**
 * > It will show the brand image of the site with some styles.
 */

interface AtAGlanceProps {
  /**
   * The code snippet that needs to be shown.
   */
  CallName: string;
  Name: string;
}

const AtAGlance: React.FC<AtAGlanceProps> = ({ Name }) => {
  return (
    <div className="w-full uppercase font-TuskerGrotesk text-primary">
      <span className="outline-title absolute text-[64px] leading-tight">
        Hey, <br></br> <p className="h-[65px] overflow-y-clip">je suis</p>
      </span>
      <span
        className={`${ataglanceModule['boujee-text']} text-[34px] absolute mt-36`}
      >
        <Typical
          steps={[
            'Not a Robot',
            1000,
            'May be an AI',
            500,
            'Not a Joke',
            Name,
            1000,
          ]}
          loop={1}
        />
        <br></br>
      </span>
    </div>
  );
};

AtAGlance.propTypes = {
  Name: PropTypes.string.isRequired,
  CallName: PropTypes.string.isRequired,
};
export default AtAGlance;
