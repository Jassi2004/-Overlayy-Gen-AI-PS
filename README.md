# -Overlayy-Gen-AI-PS

# Read HOW TO RUN AS THE PROJECT IS STILL IN PROTOTYPE STAGE

# Objective:

The task is to develop a system that automates the process of generating relevant questions from website content. The system should follow these steps:
Website Scraping:
Given a website URL, scrape or collect all the links in a json/csv file present on that website.(some url crawler api) 
For each link, retrieve and save the response(content can be generated through open source tools like jina ai, but look for edge cases which cover all information) (content of the webpage) in a JSON file.
Question Generation:
Use the saved responses to generate 10 questions related to the content of each webpage (each url of the website).
Each question should be concise and contain fewer than 80 characters.
You may use any language model (LLM) or API to assist in generating these questions.
Relevant Links and Topics:
For each webpage, identify and select 5 relevant links from the scraped URLs that are pertinent to the content and questions generated.
Sample format 
Save the generated questions, relevant links, and topics in a structured JSON file.
Automation and Validation:
Implement automation to verify that each webpage has exactly 10 questions, each under 80 characters, and that each entry includes 5 relevant links and topics.
Develop a metric to evaluate the performance of the question generation and relevance detection process. This can be done using an additional LLM or custom evaluation method.


# Tech Used

The frontend of the project is written in React.js
The backend is written in python, node.js, express
The generative AI is done using python ollama, llama3.1


# HOW TO RUN

Step 1 - cd to nodeFolder./n
Step 2 - run the node server using npm start
Step 3 - go to another terminal and host the frontend folder named vite-project
Step 4 - run the frontend using npm run dev
Step 5 - on the landing page, click on try now
Step 6 - paste the link of the web page you want the magic to be done on. (example - https://en.wikipedia.org/wiki/India) and click submit button
Step 7 - go to backend and start the python scripts
          1. python questions.py
          2. python links.py
Step 8 - now go to frontend and click on check results button
Step 9 - watch and appreciate our hardwork
