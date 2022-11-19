const fetchRecentMedia = async (hashtag_id) => {
    const response = await fetch(
        `graph.facebook.com/${hashtag_id}/recent_media?user_id=${user_id}&fields=media_url`,{
        method: "GET"
    });
    if(response.ok) {
        return await response.json();
    }
    throw new Error("Failed to get recent media")
};

export default fetchRecentMedia;