const fetchUserMediaObjects = async (ig_user_id, access_token) => {
    const response = await fetch(
        `https://graph.facebook.com/v15.0/${ig_user_id}/media?fields=media_url,username,caption&access_token=${access_token}`,{
        method: "GET"
    });
    if(response.ok) {
        return await response.json();
    }
    throw new Error("Failed to get user pages")
};

export default fetchUserMediaObjects;