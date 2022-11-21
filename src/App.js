import { useEffect, useState } from 'react';
import fetchUserPages from './util/fetchUserPages';
import fetchInstaBusinessAccount from './util/fetchInstaBusinessAccount';
import TrendingContent from './components/TrendingContent.js';
import fetchHashtagId from './util/fetchHashtagId';
import fetchRecentMedia from './util/fetchRecentMedia';
import Filters from './components/Filters';
import Search from './components/Search';

import './App.css';

const getLoginStatus = () => {
  return new Promise((resolve) => {
    FB.getLoginStatus((response) => { // eslint-disable-line 
      resolve(response);
    });
  }); 
};

const login = () => {
  return new Promise((resolve) => { 
    FB.login((response) => { // eslint-disable-line 
      resolve(response);
    },
    {scope: 'instagram_basic,pages_show_list'});
  });
};

function App() {
  const [ accessToken, setAccessToken] = useState(null);
  const [ pageId, setPageId] = useState(null);
  const [ instaAccountId, setInstaAccountId] = useState(null);
  const [ content, setContent ] = useState([]);
  const [ filters, setFilters] = useState([])
  const fetchHashtagResults = async (searchValue, instaAccountId, accessToken ) => {
    let response = await fetchHashtagId(instaAccountId, searchValue, accessToken);
    console.log("Hashtag Id: ", response);
    const hashtagId = response.data[0].id;
    response = await fetchRecentMedia(hashtagId, instaAccountId, accessToken);
    console.log("Recent media: ", response);
    setFilters([...filters, searchValue]);
    setContent(response.data.filter((e) => e.media_type === "IMAGE"));
  };
  useEffect(() => {
    const getPosts = async () => {
      let response = await getLoginStatus();
      console.log("Login status response: ", response);
      let accessToken;
      if(response?.status === "connected") {
        accessToken = response.authResponse.accessToken;
      } else {
        response = await login();
        console.log("Login response: ", response);
        accessToken = response.authResponse.accessToken;
      }
      setAccessToken(accessToken);
      response = await fetchUserPages(response.authResponse.accessToken);
      console.log("User Pages response: ", response);
      let pageId = response.data[0].id;
      setPageId(pageId);
      response = await fetchInstaBusinessAccount(pageId, accessToken);
      console.log("Instagram Business Account: ", response);
      let instaAccountId = response?.instagram_business_account?.id;
      setInstaAccountId(instaAccountId);
      await fetchHashtagResults("today", instaAccountId, accessToken);
    };
    getPosts();
  },[]);
  return (
    <div className="App">
      <header className="App-header">
        <p>
          What's Trending
        </p>
      </header>
      <main>
        <Search 
          fetchHashtagResults={fetchHashtagResults}
          instaAccountId={instaAccountId}
          accessToken={accessToken}
          />
        <Filters filters={filters}/>
        <TrendingContent content={content}/>
      </main>
    </div>
  );
}

export default App;
