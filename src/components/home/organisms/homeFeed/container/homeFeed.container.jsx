/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import PropTypes from 'prop-types'
import HomeComponent from '../view'
import fetchDataAPI from '../../../../../service/API'
import {endpoints} from '../../../../../service/endpoints'
import {setLocalStorage,getLocalStorage} from '../../../../../utils/localStorageManagement';

export const HomeContainer = ({pageProps}) => {
  const { pageId,feedData, maxPages} = pageProps;
  const [latestFeedData, setFeedData] = useState(feedData);
  const hideStory = (objectID) => {
    const loacalStoryData = getLocalStorage(objectID);
    setFeedData(latestFeedData.filter(story => story.objectID !== objectID));
    // Need to call fetchDataAPI if in case API integration is required
    setLocalStorage({
      key:objectID,
      value:{
        ...loacalStoryData,
        hidden:true
      }
    })
  }
  const upVote = (objectID,points) => {
    const loacalStoryData = getLocalStorage(objectID);
    setFeedData(latestFeedData.map(story => {
      if(story.objectID === objectID) {
return {
  ...story,
  points:points+1
}
      }
      return story;
    }));
         // Need to call fetchDataAPI if in case API integration is required
    setLocalStorage({
      key:objectID,
      value:{
        ...loacalStoryData,
        points:points+1
      }
    })
  }
  return (<HomeComponent pageId={pageId} feedData={latestFeedData} maxPages={maxPages} hideStory={hideStory} upVote={upVote} />)
}

 HomeContainer.getInitialProps = (reqParams) => {
  const defaultPage = 0;
  const pageId = parseInt(reqParams.page, 10) || defaultPage;
  const hitsPerPage = 30;
    // using front_page tag but it has 31 stories only, so won’t be able to show pagination correctly
    const pageFeedUri = `${endpoints.getPageFeed.URI}?tags=front_page&page=${pageId}&hitsPerPage=${hitsPerPage}`
   return fetchDataAPI(pageFeedUri).then(result => {
     // check if data is valid
     const { hits,nbPages:maxPages } = result || {};
     if(hits && hits.length) {
      return { feedData:hits, pageId, maxPages      }
     } 
       throw new Error('Incorrect Data');
  }).catch((err) =>{ 
    console.log("error in API Data ",err)
    return { feedData:[],pageId:defaultPage,maxPages:0 }
  })
 }

HomeContainer.propTypes = {
    pageProps: PropTypes.shape({})
};
  
HomeContainer.defaultProps = {
  pageProps: {},
};

export default HomeContainer;