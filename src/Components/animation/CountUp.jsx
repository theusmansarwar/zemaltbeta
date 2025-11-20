
"use client"
import React, { useEffect, useState, useRef } from "react";

const CountUp = ({ end, duration = 1000 }) => {
  const [count, setCount] = useState(0);
  const [hasCounted, setHasCounted] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasCounted) {
            setHasCounted(true);

            let start = 0;
            const increment = end / (duration / 10); // update every 10ms
            const timer = setInterval(() => {
              start += increment;
              if (start >= end) {
                start = end;
                clearInterval(timer);
              }
              setCount(Math.floor(start));
            }, 10);
          }
        });
      },
      { threshold: 0.5 } // trigger when 50% of element is visible
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [end, duration, hasCounted]);

  return <span ref={ref}>{count}</span>;
};

export default CountUp;
