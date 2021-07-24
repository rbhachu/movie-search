import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
export default function ScrollToTop() {

  // console.log(Uparrow); // check to see image loading
  const [isVisible, setIsVisible] = useState(false); // visibility state

  // Top: 0 takes us all the way back to the top of the page
  // Behavior: smooth keeps it smooth!
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    // Button is displayed after scrolling for 200 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);

  }, []);

  return (
        <div className={ isVisible ? 'cursor-pointer' : 'cursor-pointer hide' }>
          <span onClick={scrollToTop} alt="Back to Top" title="Back to Top"><FontAwesomeIcon icon={faArrowUp} /></span>
        </div>
      )

}