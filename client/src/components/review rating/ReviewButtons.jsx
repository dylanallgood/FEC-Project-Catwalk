import React from 'react';
import Button from '@material-ui/core/Button';

const ReviewButtons = () => {
  return (
    <div>
      <Button style={{ fontSize: '30px' }} variant='contained'>
        MORE REVIEWS
      </Button>
      <Button style={{ margin: '20px', fontSize: '30px' }} variant='contained'>
        ADD A REVIEW
      </Button>
    </div>
  );
};

export default ReviewButtons;
