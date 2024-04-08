import React from 'react';
import Accordion from './Accordion';

const FAQ: React.FC = () => {
  return (
    <div className="text-center">
      <h2 className="text-white text-2xl mb-4">Frequently Asked Questions</h2>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
        <div className="p-4 bg-gradient-to-br from-purple-900 to-gray-900 rounded-lg">
          <Accordion title="This is the title" answer="This is the answer" />
        </div>
        <div className="p-4 bg-gradient-to-br from-purple-900 to-gray-900 rounded-lg">
          <Accordion title="This is the title" answer="This is the answer" />
        </div>
      </div>
    </div>
  );
};

export default FAQ;
