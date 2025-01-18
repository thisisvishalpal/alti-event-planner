import React from "react";

import { useProfile } from "Hooks";
import { UploadSection } from "Components/Feeds";
import { ShowMessage } from "Components";

export const NoPosts = () => {
  const { isAccessingSelfProfile } = useProfile();
  return isAccessingSelfProfile ? (
    <UploadSection />
  ) : (
    <ShowMessage
      heading="Not posted anything"
      secondary="User has not posted anything yet."
    />
  );
};
