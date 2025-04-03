import React from 'react';
import { iPhone } from '../types';

interface PhoneTimelineProps {
  phones: iPhone[];
}

const PhoneTimeline: React.FC<PhoneTimelineProps> = () => {
  return (
    <div className="timeline">
      {/* Timeline content */}
    </div>
  );
};

export default PhoneTimeline; 