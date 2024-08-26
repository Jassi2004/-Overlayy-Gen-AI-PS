from langchain_ollama import OllamaLLM
import json
import os

# Initialize the model
model = OllamaLLM(model="llama3.1")

# Load the JSON data from the file
with open('./nodeFolder/scraped_links.json', 'r') as file:
    data = json.load(file)

input_text = data.get('links', '')

# Prepare the prompt
prompt = f"""
You have been provided with a list of URLs. Your task is to identify the top 5 most relevant links from the list. Relevance should be based on the content and context of the URLs. 

List of URLs:
{input_text}

Top 5 Relevant Links and Explanations:
"""

# Get the result from the model
result = model.invoke(input=prompt)

# Extract the URLs from the result
lines = result.splitlines()
top_links = [line.split('**')[1] for line in lines if line.startswith("1.") or line.startswith("2.") or line.startswith("3.") or line.startswith("4.") or line.startswith("5.")]

# Prepare the output JSON data
output_data = {
    "top_links": top_links
}

# Print the output data
print(output_data)

# Save the top links to top_links.json
with open('./nodeFolder/top_links.json', 'w') as outfile:
    json.dump(output_data, outfile, indent=4)

# Check if result.json exists
result_path = './nodeFolder/result.json'
if os.path.exists(result_path):
    with open(result_path, 'r') as result_file:
        existing_data = json.load(result_file)
else:
    existing_data = {}

# Add or append the top_links data
existing_data["top_links"] = existing_data.get("top_links", []) + [top_links]

# Save the updated result to result.json
with open(result_path, 'w') as result_file:
    json.dump(existing_data, result_file, indent=4)

print("Top links have been saved to './nodeFolder/top_links.json' and updated in './nodeFolder/result.json'.")
