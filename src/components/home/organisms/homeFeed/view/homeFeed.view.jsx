import React from 'react';
import PropTypes from 'prop-types'
import { format } from 'timeago.js';
import Anchor from '../../../../common/atoms/anchor'


const hideCtaDiv = (hideStory,objectID) => (
  <React.Fragment>
    <span>[</span>
    <span
      className="hideCta"
      role="button"
      tabIndex="0"
      onKeyPress={
  (e) => {
    if(e.which === 13) hideStory(objectID);
  }
}
      onClick={() => {
  hideStory(objectID);
}}
    >
      hide
    </span>
    <span>]</span>
  </React.Fragment>
);

const getVoteColorClass = (voteCount) => {
  let colorClass="black";
  if(voteCount>100) {
    colorClass="orange";
  } else if(voteCount>75) {
    colorClass="lightbrown";
  }
  else if(voteCount>50) {
    colorClass="darkbrown";
  }
  return colorClass;
}

export const HomeComponent = ({pageId,feedData, maxPages, hideStory, upVote}) => {
  // if(isBrowser) {

  // }
  return (
    <div className="home">
      {
      feedData.map((feedItem) => {
        const { title,num_comments:numComments,points,url,author,created_at:createdTime,objectID } = feedItem;
        let {host} = new URL(url);
        host = host && host.replace("www.", "");
        const colorClass = `upvotes ${getVoteColorClass(points)}`;
        const timeAgo = format(createdTime);
          return (
            <main className="itemrow" key={objectID}>
              <div className="itemBox">
                <div className="voteBox">
                  <div className="comments">
                    {numComments}
                  </div>
                  <div className={colorClass}>
                    {points}
                  </div>
                  <div>&nbsp;</div>
                  <div
                    className="upvotesBtn"
                    role="button"
                    tabIndex="0"
                    aria-label="Click to upvote the story"
                    onKeyPress={
  (e) => {
    if(e.which === 13) upVote(objectID,points);
  }
}
                    onClick={() => {
                      upVote(objectID,points);
}} 
                  />
                </div>
                <div className="storyDetailBox">
                  <div className="titleBox">
                    <div>&nbsp;</div>
                    <div className="title">
                      {title}
                    </div>
                  </div>
                  <div className="otherDetailBox">
                    <div className="hostBox">
                      <div className="host">
                        {`(${host})`}
                      </div>
                      <div>&nbsp;</div>
                      <div className="authorBy">
                        by
                      </div>
                      <div>&nbsp;</div>
                      <div className="author">
                        {author}
                      </div>
                    </div>
                    <div className="timeAgoBox">
                      <div>&nbsp;</div>
                      <div className="timeAgo">
                        {timeAgo}
                      </div>
                      <div>&nbsp;</div>
                      <div className="hideBox">
                        {hideCtaDiv(hideStory,objectID)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          )
      })
    }
      {/*
      Not to show More link when there is no next front page feed
     */}
      {maxPages !== pageId+1 ? (<div className="moreLinkCta"><Anchor href={`news?page=${pageId+1}`} rel="next" hrefText="More" className="moreLink" /></div>):''}
    </div>  
)}

HomeComponent.propTypes = {
    pageId: PropTypes.number.isRequired,
    maxPages: PropTypes.number.isRequired,
    hideStory: PropTypes.func.isRequired,
    upVote: PropTypes.func.isRequired,
    feedData: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default HomeComponent; 