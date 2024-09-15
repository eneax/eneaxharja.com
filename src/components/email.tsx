"use client";

import * as React from "react";

export default function Email() {
  React.useEffect(() => {
    const handler = () => {
      let emailLink = document.querySelector(
        "a[href^='mailto:']"
      ) as HTMLAnchorElement;

      if (!emailLink) return;
      if (!emailLink.href.includes(emailLink.innerText)) {
        emailLink.href = emailLink.href + emailLink.innerText;
      }
    };

    handler();
    window.addEventListener("load", handler);

    return () => {
      window.removeEventListener("load", handler);
    };
  }, []);

  return (
    <a href="mailto:" target="_blank" className="link">
      hi@eneaxharja<b className="hidden">.css</b>.com
    </a>
  );
}
