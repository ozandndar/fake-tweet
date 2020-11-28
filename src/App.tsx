import React, { useState } from 'react';
import * as htmlToImage from 'html-to-image';
import { toJpeg } from 'html-to-image';
// components
import Tweet from './Components/Tweet';

function App() {
  const [ owner, setOwner ] = useState('Comma Dev');
  const [ username, setUsername ] = useState('PhpLover');
  const [ image, setImage ] = useState('https://pbs.twimg.com/profile_images/1325350882955976704/RZuqwim0_bigger.png');
  const [ tweetContent, setTweetContent ] = useState('Lorem ipsum dolor sit amet');
  // optionals
  const [ time, setTime ] = useState('2 saat');
  const [ rt, setRt ] = useState('498');
  const [ favs, setFavs ] = useState('2392');
  const [ comments, setComments ] = useState('192');

  const downloadTweet = () => {
    var element = document.querySelector('.single-tweet') as HTMLElement;
    if (element !== null) {
      htmlToImage.toJpeg(element, { width: 600 }).then(function(dataUrl: any) {
        var img = new Image();
        img.src = dataUrl;
        img.classList.add('cropped-image');
        var link = document.createElement('a');
        link.download = 'fake-tweet.jpeg';
        link.href = dataUrl;
        document.body.appendChild(img);
        // document.getElementById('image-canvas')?.appendChild(img);
        link.click();
      });
    }
  };

  return (
    <div className="App">
      <h3 style={{ textAlign: 'center' }}>Fake Tweet Generateor</h3>

      <hr />

      <div className="form-row align-items-center">
        <div className="col-md-6">
          <div className="input-grop">
            <label className="className=">Owner</label>
            <input
              className="form-control"
              type="text"
              placeholder="Owner"
              onChange={(e) => setOwner(e.target.value)}
            />
          </div>
        </div>

        <div className="col-md-6">
          <div className="input-grop">
            <label className="className=">Username</label>
            <input
              className="form-control"
              type="text"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        </div>

        <div className="col-md-6">
          <div className="input-grop">
            <label className="className=">Image Url</label>
            <input
              className="form-control"
              type="text"
              placeholder="Image URL"
              onChange={(e) => setImage(e.target.value)}
            />
          </div>
        </div>

        <div className="col-md-6">
          <div className="input-grop">
            <label className="className=">Content</label>
            <input
              type="text"
              className="form-control"
              placeholder="TweetContent"
              onChange={(e) => setTweetContent(e.target.value)}
            />
          </div>
        </div>

        <br />
        <hr />

        <div className="col-md-6">
          <div className="input-grop">
            <label className="className=">Favorites</label>
            <input
              type="text"
              className="form-control"
              placeholder="Favorite Number"
              onChange={(e) => setFavs(e.target.value)}
            />
          </div>
        </div>

        <div className="col-md-6">
          <div className="input-grop">
            <label className="className=">Retweets</label>
            <input
              type="text"
              className="form-control"
              placeholder="Retweet Number"
              onChange={(e) => setRt(e.target.value)}
            />
          </div>
        </div>

        <div className="col-md-6">
          <div className="input-grop">
            <label className="className=">Comments</label>
            <input
              type="text"
              className="form-control"
              placeholder="Comment Number"
              onChange={(e) => setComments(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="row text-right mt-3">
        <button type="button" className="btn btn-outline-light d-block ml-auto" onClick={downloadTweet}>
          Download Tweet!
        </button>
      </div>

      <div className="tweet-container">
        <Tweet 
          imageUrl={image} 
          owner={owner} 
          username={username} 
          timeStamp={time} 
          tweetContent={tweetContent}
          favNumber={favs}
          commentNumber={comments}
          rtNumber={rt}
          />
      </div>

      <canvas id="image-canvas" />
    </div>
  );
}

export default App;
