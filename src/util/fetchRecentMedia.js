const fetchRecentMedia = async (hashtag_id, user_id, accessToken) => {
    const response = await fetch(
        `https://graph.facebook.com/v15.0/${hashtag_id}/recent_media?user_id=${user_id}&fields=media_url,caption,permalink&access_token=${accessToken}`,{
        method: "GET"
    });
    if(response.ok) {
        return await response.json();
    }
    throw new Error("Failed to get recent media")
};

export default fetchRecentMedia;