import { useEffect, useState } from 'react';
import './App.css';
import fetchUserPages from './util/fetchUserPages';
import fetchInstaBusinessAccount from './util/fetchInstaBusinessAccount';
import fetchUserMediaObjects from './util/fetchUserMediaObjects';
import TrendingContent from './components/TrendingContent.js';
import fetchHashtagId from './util/fetchHashtagId';
import fetchRecentMedia from './util/fetchRecentMedia';

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
  const [ loginStatusResponse, setLoginStatusResponse  ] = useState(null);
  const [ loginResponse, setLoginResponse ] = useState(null);
  const [ userPagesResponse, setUserPagesResponse] = useState(null);
  const [ instaBusinessAccountResponse, setInstaBusinessAccountResponse] = useState(null);
  const [ userMediaObjectsResponse, setUserMediaObjectsResponse] = useState(null);
  const [ hashtagIdResponse, setHashtagIdResponse] = useState(null);
  const [ recentMediaResponse, setRecentMediaResponse] = useState(null);
  const [ content, setContent ] = useState([]); 
  useEffect(() => {
    const getPosts = async () => {
      let response = await getLoginStatus();
      setLoginStatusResponse(response);
      console.log("Login status response: ", response);
      if(response?.status !== "connected") {
        response = await login();
        setLoginResponse(response);
        const accessToken = response.authResponse.accessToken;
        console.log("Login response: ", response);
        if (response.status === 'connected') {
          response = await fetchUserPages(response.authResponse.accessToken);
          setUserPagesResponse(response);
          console.log("User Pages response: ", response);
          response = await fetchInstaBusinessAccount(response.data[0].id, response.data[0].access_token);
          setInstaBusinessAccountResponse(response);
          console.log("Instagram Business Account: ", response);
          const instagram_account_id = response?.instagram_business_account?.id;
          response = await fetchUserMediaObjects(instagram_account_id, accessToken);
          setUserMediaObjectsResponse(response);
          console.log("Instagram Media Objects: ", response);
          response = await fetchHashtagId(instagram_account_id, "today", accessToken);
          console.log("Hashtag Id: ", response);
          setHashtagIdResponse(response);
          const hashtagId = response.data[0].id;
          response = await fetchRecentMedia(hashtagId, instagram_account_id, accessToken);
          console.log("Recent media: ", response);
          setRecentMediaResponse(response);
          setContent(response.data);

        } else {
          console.info("Failed to login");
        } 
      }
    };
    getPosts();
    // FB.getLoginStatus(function(response) { // eslint-disable-line 
    //   setLoginStatusResponse(response)
    //   console.log("Login status response: ", response);
      // if(response?.status !== "connected") {
      //   FB.login(function(response) { // eslint-disable-line 
      //       setLoginResponse(response);
      //       console.log("Login response: ", response);
      //       if (response.status === 'connected') {
      //         const userPagesResponse = await fetchUserPages(response.authResponse.accessToken);
      //         console.log("User Pages response: ", userPagesResponse);
      //       } else {
      //         console.info("Failed to login");
      //       }
      //     },
      //     {scope: 'instagram_basic,pages_show_list'}
      //   ); // eslint-disable-line 
      // }
      
    // });
  },[]);
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <main>
        {/* <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Item One" {...a11yProps(0)} />
            <Tab label="Item Two" {...a11yProps(1)} />
          </Tabs>
        </Box> */}
        <TrendingContent content={content}/>
      </main>
    </div>
  );
}

export default App;
