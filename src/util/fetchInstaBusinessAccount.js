const fetchInstaBusinessAccount = async (page_id, access_token) => {
    const response = await fetch(
        `https://graph.facebook.com/v15.0/${page_id}?fields=instagram_business_account&access_token=${access_token}`,{
        method: "GET"
    });
    if(response.ok) {
        return await response.json();
    }
    throw new Error("Failed to get user pages")
};

export default fetchInstaBusinessAccount;