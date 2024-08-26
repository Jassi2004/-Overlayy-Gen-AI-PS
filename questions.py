from langchain_ollama import OllamaLLM
import json
import os

# Initialize the model
model = OllamaLLM(model="llama3.1")

# Load the JSON data from the file
with open('./nodeFolder/scraped_data.json', 'r') as file:
    data = json.load(file)

# Extract the text content
input_text = data.get('text', '')

# Prepare the prompt
prompt = f"""
generate 10 questions relevant to the text provided. The text can be anything from code snippets to information to a questionnaire. You just have to generate 10 most relevant questions with a word limit of 80 words. There should be 10 questions.. no less than that.

Content:
{input_text}

Questions:
"""

# Get the result from the model
result = model.invoke(input=prompt)

print(result)

# Extract the questions from the result
lines = result.splitlines()
top_questions = [line.split('. ', 1)[1] for line in lines if line.startswith(tuple(str(i) for i in range(1, 11)))]

# Prepare the output JSON data
output_data = {
    "top_questions": top_questions
}

# Print the output data
print(output_data)

# Save the top questions to top_questions.json
with open('./nodeFolder/top_questions.json', 'w') as outfile:
    json.dump(output_data, outfile, indent=4)

#  Check if result.json exists
result_path = './nodeFolder/result.json'
if os.path.exists(result_path):
    with open(result_path, 'r') as result_file:
        existing_data = json.load(result_file)
else:
    existing_data = {}

# Add or append the top_questions data
existing_data["top_questions"] = existing_data.get("top_questions", []) + [top_questions]

# Save the updated result to result.json
with open(result_path, 'w') as result_file:
    json.dump(existing_data, result_file, indent=4)

print("Top questions have been saved to './nodeFolder/top_questions.json' and updated in './nodeFolder/result.json'.")
