![cf](https://i.imgur.com/7v5ASc8.png) Lab 28: Routing & Lab 29: Component Composition
======

## Directory Structure
* **README.md**
* **.gitignore**
* **.eslintrc**
* **.eslintignore**
* **package.json**
  * a `build` script has been configured for building the app with webpack
  * a `watch` script has been configured for watching the app with webpack-dev-server
* **webpack.config.js**
* **babelrc**
* **src/** - contains frontend code
* **src/index.html**
* **src/main.js** - contains entire app
* **src/components** - contains app components (see list below for all components)
* **src/style**
* **src/style/main.scss**

## Installation
1. To install this application, download the files from this repository
2. `cd` to the repository directory and run `npm i`
3. Use `npm run watch` to run the app locally
4. Navigate to `localhost:<PORT>/` or `localhost:<PORT>/dashboard` to explore the app

## Application Details
* This app uses `React` and is comprised of the following components:
```
<App />
  <NavBar />
  <Landing />
  <Dashboard />
    <NoteForm />
    <NoteList />
      <NoteItem />
        <Modal />
        <NoteUpdateForm />
```
* With the app, a user can:
  * **Add** a note & subsequently view the note in the 'notes' section
  * **Update** an existing note by clicking the 'Update' button
    * Update the note's text within the modal
    * Cancel out of the update modal
  * **Delete** an existing note by clicking the 'X' button to the right of the 'Update' button

  ## 3/28/18 Updates
  * Routes are now `/` and `/dashboard`, I have removed `/landing` as an option and replaced those routes with `/` instead
  * `_note-update-form.scss` no longer uses `!important` on two properties
  * `<main>` tag on `<Modal />` changed to `<div>`
  * Decreased opacity on `<Modal />` background color
  * All clickable items now have css `cursor: pointer`

  ## Credits

  Melanie Cohen

  Referenced the following article when building the `<Modal />` module: https://daveceddia.com/open-modal-in-react/
