// components/EmojiReactions.jsx

import React, { useState } from 'react';

const EMOJIS = ['👍', '❤️', '😂', '🔥', '😮'];

const EmojiReactions = () => {
  const initialCounts = EMOJIS.reduce((acc, emoji) => {
    acc[emoji] = 0;
    return acc;
  }, {});

  const [counts, setCounts] = useState(initialCounts);

  const handleReaction = (emoji) => {
    setCounts((prev) => ({
      ...prev,
      [emoji]: prev[emoji] + 1,
    }));
  };

  return (
    <div className="mt-6 flex flex-wrap items-center gap-4">
      <p className="text-gray-700 dark:text-gray-300 font-semibold">React with:</p>
      <div className="flex gap-3">
        {EMOJIS.map((emoji) => (
          <button
            key={emoji}
            onClick={() => handleReaction(emoji)}
            className="text-2xl transition transform hover:scale-125 focus:outline-none"
          >
            {emoji} <span className="text-sm">({counts[emoji]})</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default EmojiReactions;
