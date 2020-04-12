
import fetch from "isomorphic-fetch";

function fetchData(URI) {
    return new Promise((resolve, reject) => {
        fetch(URI)
          .then(response => {
            resolve(response.json( ));
          })
          .catch(e => {
            console.log("error in API method",e)
            reject(e);
          });
      });
}

export default fetchData;
