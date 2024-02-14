+++
title = 'Menus'
+++

# Menu configuration

## Top navbar

The top navbar is build using the **main** menu.  7


Site configuration

| Name                 | default | description                                                      |
| -------------------- | ------- | ---------------------------------------------------------------- |
| navbar.display_title | false   | configure if the theme add the site title in the navbar          |
| navbar.display_logo  | true    | configure if the theme add the site logo in the navbar           |
| navbar.display_search        | true    | configure if the search is enabled (json render must be enabled) |

In the site configuration you can choose to display the sit

### Define automatically 
To automatically define menu entries for each top-level section of your site, enable the section pages menu in your site configuration.

```toml
sectionPagesMenu = 'main'
```

> i For more options read [Hugo Documentation about Menu](https://gohugo.io/content-management/menus/)

## Sidenav 

The sidenav is a 2 level menu build based on the site structure.

The section menu can recive an icon based on [Bootstrap Icons](https://icons.getbootstrap.com/)

in your section `_index.md` you can use **icon** and **icon_color** param to define icon and color.

```markdown
+++
title = 'Menu'
icon= 'book-half'
icon_color= 'indigo'
+++
```

## Asidenav

The asidenav is build using Hugo ```{{- .TableOfContents }}```