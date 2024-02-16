# ClearGuide
Documentation available at https://famaridon.github.io/hugo-clear-guide/
## Features

* [x] Search
* [x] Navbar
* [x] Sidenav
* [x] Aside menu
* [x] Syntex Higlight
* [x] Mermaid
* [x] Use pretty font
* [x] Use emoji font
* [ ] Link to sugest changes
  
## Bugs

* [x] Home page is empty
* [x] Mermaid and prism.js slow down page loging time
* [x] Blank page is displayed for sections need redirect

## Installation
Clone the ClearGuide theme into the themes directory, adding it to your project as a Git submodule. As is recommanded in [Hugo getting started](https://gohugo.io/getting-started/quick-start/)

```
git submodule add https://github.com/famaridon/hugo-clear-guide.git themes/clear-guide`
```

Append a line to the site configuration file, indicating the current theme.

```
echo "theme = 'clear-guide'" >> hugo.toml
```

## Configuration

## Developers

To run the doc localy clone the repo.

1. clone the repository
2. go to docs folder
3. run ```hugo serve```
4. open http://localhost:1313
