import axios from "axios";

export const fetchUserData = async (username, location, minRepos) => {
  try {
    // Build the query string
    let query = "";

    if (username) query += `${username} in:login`;
    if (location) query += ` location:${location}`;
    if (minRepos) query += ` repos:>=${minRepos}`;

    // Call GitHub Search API
    const response = await axios.get(
      `https://api.github.com/search/users?q=${query}`
    );

    return response.data.items; // items is an array of users
  } catch (error) {
    throw error;
  }
};
