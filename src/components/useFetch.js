import { useState, useEffect } from 'react';

export default function useFetch(url) { // import url fetch endpoint as props

  // declare states
  const [fetchdata, setFetchdata] = useState(null); // state for fetch data
  const [fetchdatapages, setFetchdataPages] = useState(0); // state for page total
  const [fetchdatatotal, setFetchdataTotal] = useState(0); // state for results total
  const [fetchstatus, setFetchStatus] = useState(false); // state for fetch data status, set to false at start to hide loading status
  const [error, setError] = useState(null); // state for error status from fetch data or fetch status
  const [length, setLength] = useState(0);
  
  // useEffect - pass function as argument each time there is a re-render of the data state 
  useEffect(() => {

    const abortCont = new AbortController(); // used to unmount page state on page change to avoid state conflicts
    const signal = { signal: abortCont.signal } // works with abortCont
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`
      }
    };
    
    if(url) { // if url not empty run fetch
      setError(null); // reset error message
      setLength(0); // reset length
      setFetchdata(null); // clear previous results data

      
        setTimeout(() => { // add delay to code to for testing only

          setFetchStatus(false); // show loading status
          fetch(url, options, signal) // fetch url endpoint + stop loading current page state when going to another page state
          // returns a promise

          // returns a response object
          .then(response => { 

            // if response.ok' not equal to 'yes', then fire error
            if(!response.ok) { 
              setLength(0); // reset length
              setFetchStatus(false); // show loading status
              throw Error('Please enter a Movie to Search.') // if value empty, error message to show
              //setError('Please enter a Movie to Search2.') // if value empty, error message to show
            // if response.ok continue
            } else {
              setError(null);
            }
            return response.json(); // converts object to useable json object if no issues
          })


          // returns another promise
          // if no issues
          .then(data => { // final step to get json object as data
            setFetchdata(data.results); // update data state to get and use JSON data
            setFetchdataPages(data.total_pages); // total pages
            setFetchdataTotal(data.total_results); // total results

            // if data response object returns 0 results show error
            if(data.results.length === 0) { 
              setLength(0) // set data length state
              setFetchStatus(false); // show loading status
              //throw Error('We couldnt find that movie, please try another.') // error message to show
              setError('We couldnt find that movie, please try another.') // error message to show
            // if no error, set error state status to 'null' so no error message shown
            } else {
              setError(null);
              setLength(data.results.length) // set data length state
            }
          })


          // if issues: capture error if cant connect to JSON server or fetch url issue display error
          .catch(err => { // catch block
            setLength(0) // set data length state
            setFetchStatus(false); // show loading status
            setFetchdataPages(0); // total pages
            setFetchdataTotal(0); // total results

            // check if error is loading page state error, if so ignore
            if(err.name === 'AbortError') { 
              throw Error('Search stopped, please try again.') // error message to show
              //setError('Search stopped, please try again.') // error message to show
              } else if (err.message === 'Failed to fetch') { // trying to add custom error message if cant connect to api
              //throw Error('Cant connect to API, please try later.') // error message to show
              setError('Cant connect to API, please try later.') // error message to show
            } else {        
              setError(err.message); // get/show error message
            }
          })


          return () => abortCont.abort(); // run abort controller

        
        }, 1000); // wait 2 seconds (2000), set to zero for production

      setFetchStatus(true); 

    } // if)(url)

  // useEffect
  }, [url]); // run on url state change, leave [] to run once only

  return { fetchdata, fetchdatapages, fetchdatatotal, fetchstatus, error, length } // pass hooks states
}