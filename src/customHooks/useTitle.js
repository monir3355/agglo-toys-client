import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `Agglo Toys | ${title}`;
  }, [title]);
};
export default useTitle;
