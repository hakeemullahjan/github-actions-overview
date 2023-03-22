import { useState } from "react";

export const FALLBACK_AVATAR_ALT_TEXT = "cataas";
export const FALLBACK_AVATAR_URL = "https://cataas.com/cat/says/hello%20world!";

type AvatarProps = {
  /** the url of an image to render for the Avatar. **/
  url?: string;
  /** the alt text to use for the url image. **/
  alt?: string;
};

const Avatar = ({
  url = FALLBACK_AVATAR_URL,
  alt = FALLBACK_AVATAR_ALT_TEXT,
}: AvatarProps) => {
  const [srcToUrl, setSrcToUrl] = useState(url);

  return (
    <img
      src={srcToUrl}
      alt={alt}
      onError={() => setSrcToUrl(FALLBACK_AVATAR_URL)}
    />
  );
};

export default Avatar;
