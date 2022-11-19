const fetchHashtagId = async (user_id, ig_hashtag_search) => {
    const response = await fetch(
        `graph.facebook.com/ig_hashtag_search?user_id=${user_id}&q=${ig_hashtag_search}`,{
        method: "GET"
    });
    if(response.ok) {
        return await response.json();
    }
    throw new Error("Failed to get hashtag id")
};

export default fetchHashtagId;