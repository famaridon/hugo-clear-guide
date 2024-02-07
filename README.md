# ClearGuide
Documentation available at https://famaridon.github.io/hugo-clear-guide/
## Features

[x] Search
[x] Navbar
[] Sidenav
[x] Aside menu
[x] Syntex Higlight
[x] Mermaid
[] Latex

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
