import { useEffect, useState } from 'react';
import Uparrow from '../images/arrow-circle-up-solid-b.png'; // import image

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
          {/* <img onClick={scrollToTop} src={Uparrow} alt="Back to Top" title="Back to Top" /> */}
          <span onClick={scrollToTop} alt="Back to Top" title="Back to Top"><img src={Uparrow} width="20" height="20" alt="" />Back to Top</span>
        </div>
      )

}