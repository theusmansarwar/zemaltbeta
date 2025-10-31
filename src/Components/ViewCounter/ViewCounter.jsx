
"use client";

import { countView } from "@/DAL/Create";
import { useEffect } from "react";

export default function ViewCounter() {
  useEffect(() => {
    countView();
  }, []);

  return null;
}
