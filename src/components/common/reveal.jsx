import React, { createElement, useEffect, useRef, useState } from "react";

export default function Reveal({ as = "div", effect = "", ...props }) {
  const ref = useRef(null);
  const [effectState, setEffectState] = useState("");

  useEffect(() => {
    if (!("IntersectionObserver" in window)) {
      return setEffectState(effect);
    }

    const element = ref.current;

    const options = {
      rootMargin: "-5% 0px -5% 0px",
      threshold: 0,
    };

    function callback(entries, observer) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setEffectState(effect);
          observer.disconnect();
        }
      });
    }

    const observer = new window.IntersectionObserver(callback, options);

    observer.observe(element);
  }, [setEffectState, effect]);

  props = {
    ...props,
    className: `${props.className} ${effectState}`,
    ref,
  };

  return createElement(as, props);
}
