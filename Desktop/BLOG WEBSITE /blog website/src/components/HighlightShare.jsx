import React, { useState, useEffect } from 'react';
import { shareHighlight } from '../utils/shareUtils';

const HighlightShare = () => {
  const [selectedText, setSelectedText] = useState('');

  useEffect(() => {
    const handleMouseUp = () => {
      const selection = window.getSelection().toString();
      if (selection.length > 10) setSelectedText(selection);
      else setSelectedText('');
    };

    document.addEventListener('mouseup', handleMouseUp);
    return () => document.removeEventListener('mouseup', handleMouseUp);
  }, []);

  if (!selectedText) return null;

  return (
    <div className="fixed bottom-6 right-6 bg-blue-600 text-white px-4 py-2 rounded shadow-lg z-50">
      <button onClick={() => shareHighlight(selectedText)}>🔗 Share Highlight</button>
    </div>
  );
};

export default HighlightShare;
