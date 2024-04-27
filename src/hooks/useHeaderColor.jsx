import { useEffect, useState } from "react";

const useHeaderColor = () => {
const [headerColor, setHeaderColor] = useState(false)
  //to handle shadow of header
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 8) {
        setHeaderColor("rgba(0, 0, 0,0.7)")
      } 
      else {
        setHeaderColor("rgb(0, 0, 0)");
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [headerColor]);

  return headerColor
};

export default useHeaderColor;
