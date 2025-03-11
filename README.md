# API Testing POC Project

## Overview

Welcome to the API Testing POC project! This repository serves as a Proof of Concept (POC) for conducting API testing using the following tools:

- **PlaywrightTest**: as base test automation framework 
- **openapi-typescript**: For generating TypeScript interfaces from OpenAPI specifications.
- **@apidevtools/swagger-parser**: For parsing OpenAPI specification.
- **openapi-response-validator**: For validating API responses against an OpenAPI schema.
- **factory.ts**: For generating mock data using factories.
- **Chance**: For generating random data.

The core features are:
- **TypeScript Support**: Utilize TypeScript for writing tests, including support for type-safe data objects, requests, and responses based on OpenAPI schemas.
- **Automatic Response**: Validation: Validate API responses against their corresponding OpenAPI schema to ensure correctness.
- **Parallel Test Execution**: Run tests in parallel to save time and increase efficiency.
- **HTML Reporting**: Generate HTML reports to easily visualize test results and share them with stakeholders.
- **Possible Integration with Slack Notification Module**: Easily integrate existing Slack notification modules to receive test notifications and consolidate reports.
- **Possibility to change**: Current architecture allows easily to switch library that making requests and test runner 

## Project Structure

The project structure is as follows:

```
toro-apps-backend-api-testing-poc/
│
├── api/ 
│   ├── contoller - place where we describe how to make request to endpoint
│        └── some
│               ....  
│   ├── core - core logic of framework, two main classes placed here: client and request 
│   ├── entity - place where we keep our test data object, as campaign, here we use factory to define object and chance to generate random data 
│   └── type - place for types 
│
├── buildscripts/ - place for build scripts
│   ├── build.sh
│   └── ...
│
├── config/ - place for keeping url under test
│   ├── env.ts
│   └── ...
├── test/ - place for keeping tests
│   └──  
│
│
├── utils/ - place for keeping utils 
│   ├── client.fixture.ts - playwrigth client fixture 
│   ├── generate-typings.ts - global setup for generate types based on OpenApi schema
│   ├── schema-validator.ts - class responsible for response schema validation, that parse and cache current OpenApi schema and later compare correspondig response with types in schema
│   ├── step.ts - step decorator to provide more info in playwright report 
│   └── ...
├── biome.json - biome linter config
├── playwright.config.ts - base playwright config 
├── tsconfig.json
└── README.md
```


## Getting Started

1. **Clone the Repository**:
   ```bash
   git clone <some-git>
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```
3. **Install Playwright Dependencies**:
   ```bash
   npx playwright install
   ```   
4. **Run tests**:
   ```bash
   npm run 
   ```
5. **To see html report after test execution**:
   ```bash
   npx playwright show-report
   ```      

