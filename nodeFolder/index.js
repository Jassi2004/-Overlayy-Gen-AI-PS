require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const url = require('url'); // For URL resolution

const app = express();
const PORT = process.env.PORT || 8000;
app.use(cors());

app.use(express.json());
app.use(express.json());

app.post('/crawl', async (req, res) => {
    const { url: requestUrl } = req.body;

    if (!requestUrl) {
        return res.status(400).json({ error: 'URL is required' });
    }

    try {
        // Fetch the HTML content of the webpage
        const response = await axios.get(requestUrl);
        const htmlData = response.data;

        // Load the HTML into cheerio
        const $ = cheerio.load(htmlData);

        // Initialize a string to accumulate the cleaned text content from <p> tags
        let allText = '';

        // Function to clean text by removing unwanted characters
        const cleanText = (text) => {
            return text
                .replace(/[\n\r]/g, ' ')    // Replace newlines with spaces
                .replace(/['"]/g, '')       // Remove single and double quotes
                .replace(/[^\w\s]/g, '')    // Remove any non-word characters except whitespace
                .replace(/\s+/g, ' ')       // Replace multiple spaces with a single space
                .trim();                    // Trim leading and trailing spaces
        };

        // Extract and clean all text from <p> tags and concatenate them into a single string
        $('p,span').each((i, elem) => {
            const paragraphText = cleanText($(elem).text());
            if (paragraphText) {
                allText += paragraphText + ' '; // Concatenate each paragraph with a space
            }
        });

        // Slice the text to the first 20,000 characters
        const slicedText = allText.substring(0, 20000);

        // Remove any leading/trailing whitespace
        const finalText = slicedText.trim();

        // Extract up to the top 30 links
        const links = [];
        const baseUrl = new URL(requestUrl); // Use URL constructor to get base URL
        $('a').each((i, elem) => {
            if (i < 5) {
                let href = $(elem).attr('href');
                if (href) {
                    // Resolve relative URLs to absolute URLs
                    href = url.resolve(baseUrl.href, href);
                    links.push(href);
                }
            }
        });

        // Define the filenames and paths for the JSON files
        const textFileName = `scraped_text.json`;
        const linksFileName = `links.json`;
        const textFilePath = path.join(__dirname, textFileName);
        const linksFilePath = path.join(__dirname, linksFileName);

        // Save the cleaned and sliced text to a JSON file
        fs.writeFileSync(textFilePath, JSON.stringify({ text: finalText }, null, 2)); // Indent with 2 spaces

        // Save the links to a separate JSON file
        fs.writeFileSync(linksFilePath, JSON.stringify({ links }, null, 2)); // Indent with 2 spaces

        // Respond with the file paths
        res.status(200).json({
            message: 'Cleaned text and links saved successfully',
            textFilePath,
            linksFilePath
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch data or process the page' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
