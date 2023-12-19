require('dotenv').config();
const fetch = require('node-fetch');

const getGitHubRepos = async () => {
    const token = process.env.GITHUB_TOKEN;
    const username = "Demir051";
    const apiUrl = `https://api.github.com/users/${username}/repos`;

    try {
        const response = await fetch(apiUrl, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("API isteği başarısız oldu:", error);
        return [];
    }
};

module.exports = {getGitHubRepos};
