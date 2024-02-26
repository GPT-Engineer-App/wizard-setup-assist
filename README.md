# wizard-setup-assist

Initial Setup: Defining Project Parameters
User Interface (UI) Design
The platform provides a guided setup wizard that starts immediately after creating a new project. This wizard is designed to be intuitive, using layman's terms where possible, and providing explanations or examples for technical terms.
Each step of the wizard includes tooltips and help icons next to terminology and options, offering quick explanations or links to more detailed documentation.
Step 1: Selecting the Domain
UI Element: Dropdown menu or tiles to select a domain, such as "Healthtech," "Banking," "Retail," etc.
Developer Action: The developer selects "Healthtech."
Platform Action: The platform uses this selection to tailor subsequent options and recommendations, focusing on healthtech-related models, data processing techniques, and compliance requirements.
Step 2: Defining the Primary Task
UI Element: A form field where the developer can describe the task in natural language or select from common tasks predefined by the platform (e.g., "Image Diagnosis," "Fraud Detection").
Developer Action: The developer types "Diagnose skin conditions from images" or selects a similar predefined task.
Platform Action: Utilizes NLP to parse the developer's input and maps it to specific AI capabilities, suggesting relevant models such as CNNs for image recognition.
Step 3: Data Specification
UI Element: Interface sections for data input methods, including options for "Upload Dataset," "Connect to Data Source," or "Use Synthetic Data."
Developer Action: Chooses to "Connect to Data Source" and selects the format of the data (e.g., images, CSV).
Platform Action: Provides fields to enter connection details (API keys, access tokens) and automatically tests the connection. Offers simple options for data preprocessing based on the data type selected.
Step 4: Compliance and Privacy
UI Element: Checkboxes for compliance requirements (e.g., HIPAA, GDPR) and data privacy options (e.g., data anonymization, encryption).
Developer Action: Checks the applicable compliance requirements and selects data privacy measures.
Platform Action: Configures the project setup to ensure all processing, model training, and deployment will adhere to the selected compliance and privacy standards.
Step 5: Model Preferences
UI Element: Sliders and dropdowns for model preferences, including accuracy vs. speed, model size, and specific features (e.g., "Explainability," "Low-latency").
Developer Action: Adjusts the sliders based on project needs, preferring higher accuracy over speed for this task.
Platform Action: Filters and recommends models that fit these preferences, providing a brief overview of each model’s strengths and trade-offs.


## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/wizard-setup-assist.git
cd wizard-setup-assist
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Tech stack

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [Chakra UI](https://chakra-ui.com/)

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
