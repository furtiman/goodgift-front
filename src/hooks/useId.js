import { useMemo } from "react";

// eslint-disable-next-line
export const useId = prefix => useMemo(() => `${prefix + "-"}${Math.random()}`, [])