import PropTypes from 'prop-types';
import React from 'react';
import Typical from 'react-typical';
import presentyourselfModule from './PresentYourself.module.css';

/**
 * > It will show the brand image of the site with some styles.
 */

interface PresentYourselfProps {
  /**
   * The code snippet that needs to be shown.
   */
  CallName: string;
  Name: string;
}

const PresentYourself: React.FC<PresentYourselfProps> = ({
  Name,
  CallName,
}) => {
  return (
    <div className="uppercase font-TuskerGrotesk text-[64px] text-primary">
      <span className="outline-title">Hey, je suis </span>
      <span className={presentyourselfModule['boujee-text']}>
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
      <span className="outline-title">Mais vous pouvez m’appeler </span>
      <span className="variation">
        <Typical steps={[Name, 500, CallName, 1000]} loop={4} wrapper="p" />
      </span>
    </div>
  );
};

PresentYourself.propTypes = {
  Name: PropTypes.string.isRequired,
  CallName: PropTypes.string.isRequired,
};
export default PresentYourself;
