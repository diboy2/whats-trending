const fetchHashtagId = async (user_id, ig_hashtag_search, accessToken) => {
    const response = await fetch(
        `https://graph.facebook.com/v15.0/ig_hashtag_search?user_id=${user_id}&q=${ig_hashtag_search}&access_token=${accessToken}`,{
        method: "GET"
    });
    if(response.ok) {
        return await response.json();
    }
    throw new Error("Failed to get hashtag id")
};

export default fetchHashtagId;