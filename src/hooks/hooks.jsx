import { useEffect } from "react";
import toast from "react-hot-toast";

const useErrors = (errors = []) => {
  useEffect(() => {
    if (!Array.isArray(errors)) return;

    for (const { isError, error, fallback } of errors) {
      if (!isError) continue;

      if (fallback) {
        fallback();
        continue; // Skip toast if fallback exists
      }
      const message = error?.data?.message || "Something went wrong!";
      toast.error(message);
    }
  }, [errors]);
};


const useDebouncedEffect = (callback, deps, delay) => {
  useEffect(() => {
    const handler = setTimeout(() => {
      callback();
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [ delay, ...deps]); 
};


export { useErrors, useDebouncedEffect };
