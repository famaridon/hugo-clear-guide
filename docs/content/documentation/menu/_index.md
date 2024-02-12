+++
title = 'Menu'
icon= 'book-half'
icon_color= 'indigo'
+++

# Menu configuration

## Top navbar

The top navbar is build using the **main** menu.  

### Define automatically 
To automatically define menu entries for each top-level section of your site, enable the section pages menu in your site configuration.

```toml
sectionPagesMenu = 'main'
```

> i For more options read [Hugo Documentation about Menu](https://gohugo.io/content-management/menus/)

## Sidenav 

The sidenav is a 2 level menu build based on the site structure.

## Asidenav

The asidenav is build using Hugo ```{{- .TableOfContents }}```