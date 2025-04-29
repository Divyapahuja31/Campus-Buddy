import React from 'react';
import { getReadingTime } from '../utils/readingTime';

const ReadingTime = ({ content }) => {
  const minutes = getReadingTime(content);

  return (
    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
      ⏱️ Estimated Reading Time: {minutes} min read
    </p>
  );
};

export default ReadingTime;
