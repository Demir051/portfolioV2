require('dotenv').config();

const token = process.env.GITHUB_TOKEN;

const username = "Demir051";

const apiUrl = `https://api.github.com/users/${username}/repos`;

fetch(apiUrl, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.error("API isteği başarısız oldu:", error);
    });
