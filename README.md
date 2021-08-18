# Customer Engineering Assignment

This assignment mimics the technical work you might perform as a customer-facing engineer at Algolia. It gives us an understanding of your skills in:

- Problem Solving
- Communication
- Coding

This assignment has two parts:

1. Answering sample customer questions
2. Implementing a basic demo of Algolia

You aren't required to complete this in a certain amount of time, but we expect most candidates will take around five hours to complete it depending on familiarity with Algolia. Please make a note of roughly how long each part of the assignment took to research and complete.

You can consult the scoring rubric at the end of this README to know how we'll assess your submission.

_Important_: Algolia will never reuse your work. This assignment is for evaluation purposes only.

## 1. Sample customer questions

The questions in the questions directory are representative of the types of questions we often see at Algolia. Please answer each question as if you were replying to the customer, and feel free to add internal comments or notes to explain your thinking. Do your best to include a technical solution or suggestion for each question, rather than suggesting to jump on a call.

Answer the questions by directly editing the [Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) file for each question. You are welcome to use any formatting you would in a real email—for example, links, bold text, images, etc.

## 2. Implementation

Our customer, Spencer and Williams, wants to implement a **_federated search experience_** that includes both products and **_suggested search terms_** in their provided codebase. They've provided the raw product data and have asked for us to create the suggestions using Algolia's [Query Suggestions feature](https://www.algolia.com/doc/guides/building-search-ui/ui-and-ux-patterns/query-suggestions/js/).

**Your goal is to:**

- Create an account on Algolia
- Create an indexing script that will generate an Algolia index out of the data on your own application
- Configure the index relevancy as best as you can so the results are relevant and could be used on a real website
- Write additional code to create a functional front-end demo

### Getting started

First, you'll need to sign up for an Algolia account at https://www.algolia.com/users/sign_up.

You can find the product dataset in the data directory of this repository. Push this data to Algolia in your own application and use it to build your sample implementation. You can create a Query Suggestions index from your Algolia trial account following [our documentation](https://www.algolia.com/doc/).

### Running this repo

To run this project locally, install the dependencies and run the local server:

```sh
npm install
npm start
```

Alternatively, you may use [Yarn](https://http://yarnpkg.com/):

```sh
yarn
yarn start
```

Open http://localhost:3000 to see your app.

# Delivering your assignment

Reply to the person that sent you the assignment with your modified files:

1. **Answers** (and notes if any) to customer questions
2. An **indexing script** for both records and settings
3. A functional federated search demo, including a way for us to **see your demo in a browser**; you can host the front-end on [GitHub Pages](https://pages.github.com/) or another tool we can access

You can create a local GIT repository and send it back as a ZIP file OR share a repository link directly as long as you've made it a [private repository](https://docs.github.com/en/github/administering-a-repository/managing-repository-settings/setting-repository-visibility#making-a-repository-private). If you're using a private repository, please make sure to grant access to the last person you interviewed with. If sending a ZIP file, keep in mind that many email clients won't allow you to attach a ZIP file directly, so you can use any Google Drive or Dropbox to save your file and send us a link to download it.

Please also send us in the email:

- URL for viewing the demo
- The application ID and index name(s) you created—please grant our team access for at least one month using this [link](https://www.algolia.com/account/support).
- Any explanation you feel is necessary to understand your thinking, reasoning, and the challenges you faced
- The approximate time in hours it took you to complete this assignment
- Any feedback on the assignment itself

## Notes

- Your indexing script can be made of one or multiple files, can be written in any programming language you are the most comfortable with, and can use any existing module you like. We should be able to run your indexing script ourselves on our accounts. Include instructions on how to run the script.
- Be careful not to publish your Algolia admin API key in the final indexing script. Write it so that your indexing script reads your Algolia credentials from a parameter passed via the command line or from an environment variable, not credentials stored in the code.
- Your search-only API key and application ID can (and should if you want us to see a demo) live directly inside your fixed autocomplete.js file.

If you have any questions, please don't hesitate to let us know!

## Scoring Rubric

### Customer Questions

| Did the candidate:                                      | Yes | No  |
| :------------------------------------------------------ | :-- | :-- | --- |
| Answer the questions correctly?                         |     |     |
| Answer in a succinct, clear manner?                     |     |     |
| Have minimal spelling, grammar, or formatting mistakes? |     |     |
| Employ a friendly, helpful tone?                        |     |     |     |

### Implementation

| Did the candidate:                                      | Yes | No  |
| :------------------------------------------------------ | :-- | :-- | --- |
| Ask for clarification when necessary?                   |     |     |
| Follow the instructions of the assignment?              |     |     |
| Write code that follows best-practices?                 |     |     |
| Avoid over-engineering?                                 |     |     |
| Demonstrate understanding of the code they wrote?       |     |     |
| Demonstrate good code and process organization?         |     |     |
| Craft a search experience that is simple to understand? |     |     |
| Account for different use cases (e.g. mobile, touch)    |     |     |
| Go beyond what was asked of them?                       |     |     |     |

### Overall Impressions

| Rate the candidate (1 - 5) in each of the following categories | Rating |
| :------------------------------------------------------------- | :----- |
| Problem solving skills                                         |        |
| Communication skills                                           |        |
| Technical aptitude                                             |        |
