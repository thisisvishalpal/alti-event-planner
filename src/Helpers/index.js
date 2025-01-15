/**
 * Converts a given date string into a human-readable time ago format.
 * @param {string} dateString - ISO date string (e.g., "2025-01-04T13:14:28.679Z").
 * @returns {string} - Human-readable time ago string.
 */
export const timeAgo = (dateString) => {
  const now = new Date();
  const givenDate = new Date(dateString);
  const diffMs = now - givenDate; // Difference in milliseconds

  if (isNaN(diffMs)) {
    return "Invalid date";
  }

  const diffSeconds = Math.floor(diffMs / 1000);
  const diffMinutes = Math.floor(diffSeconds / 60);
  const diffHours = Math.floor(diffMinutes / 60);
  const diffDays = Math.floor(diffHours / 24);
  const diffWeeks = Math.floor(diffDays / 7);
  const diffMonths = Math.floor(diffDays / 30);
  const diffYears = Math.floor(diffDays / 365);

  if (diffSeconds < 60) return `${diffSeconds} seconds ago`;
  if (diffMinutes < 60) return `${diffMinutes} mins ago`;
  if (diffHours < 24) return `${diffHours} hours ago`;
  if (diffDays < 7) return `${diffDays} days ago`;
  if (diffWeeks < 4) return `${diffWeeks} weeks ago`;
  if (diffMonths < 12) return `${diffMonths} months ago`;
  return `${diffYears} years ago`;
};

// // Example Usage
// console.log(timeAgo("2025-01-04T13:14:28.679Z")); // Output: "2 days ago" (depending on the current date)
