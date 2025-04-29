// utils/shareUtils.js

export const shareHighlight = (text) => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}%20—%20via BlogVerse`;
    window.open(twitterUrl, '_blank');
  };
  