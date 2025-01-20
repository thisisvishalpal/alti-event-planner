import React from "react";
import { Button } from "react-bootstrap";

export const ShareButton = ({ title, text, url }) => {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text,
          url,
        });
      } catch (error) {
        console.error("Error sharing content:", error);
      }
    } else {
      navigator.clipboard.writeText(url).then(() => {
        alert("Link copied to clipboard!");
      });
    }
  };

  return (
    <Button variant="outline-secondary" onClick={handleShare}>
      Share
    </Button>
  );
};
