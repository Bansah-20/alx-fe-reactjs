import axios from "axios";

const BASE_URL = "https://api.github.com";

export const advancedSearchUsers = async (username, location, minRepos) => {
  try {
    let query = "";
    if (username) query += `${username} in:login `;
    if (location) query += `location:${location} `;
    if (minRepos) query += `repos:>=${minRepos}`;

    const response = await axios.get(`${BASE_URL}/search/users?q=${query}`, {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_APP_GITHUB_API_KEY || ""}`,
      },
    });

    return response.data.items;
  } catch (error) {
    console.error("Error fetching advanced search:", error);
    return [];
  }
};
