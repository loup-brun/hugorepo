# Hugorepo

My favourite files for making websites with [Hugo](https://gohugo.io/).

## Features

- Stripped-down, boilerplate structure
- Works as a starting point for a theme
- Rich, semantic HTML (with templates featuring OpenGraph, Schema.org, Dublin Core)
- Clean, basic markup for the basic pages (list, single)
- Useful code snippets, such as menu templates
- Write more effective CSS with [PostCSS](https://postcss.org/) (Autoprefixer, nested SASS-like syntax, purgeCSS, import)
- Ready for TailwindCSS

## 🛠  Install

Requires [NodeJS](https://nodejs.org/) v10+ (to build assets with [PostCSS-CLI](https://github.com/postcss/postcss-cli)).

```bash
npm install
```

## 💻 Local

Start a local server (http://localhost:1313 by default):

```bash
npm run serve  # hugo serve --disableFastRender --buildDrafts --buildFuture
```

## 📦 Production

Build the site in the `public/` directory:

```bash
npm run build  # rm -rf public && hugo --minify
```

## 🚀 Deploy

Once the files are built in `public/`, it’s only a matter of copying them to the webserver.
There are many ways to achieve this.
Here’s a simple solution using Rsync.

### Rsync

Transfer the files using Rsync.
This requires prior editing of the `commands/deploy.sh` file to match your configuration.

```bash
npm run deploy  # ./commands/deploy.sh
```

## Shortcodes

### 🖼 img

```md
{{< img src="/path/to/img.jpg" class="custom-class" title="Title (optional)" caption="Cpation (optional)" >}}
```

Params:

- `alt` *(string)*: alternative text if image cannot be displayed.
- `class` *(string)*: add a class to the `<figure>` object.
- `caption` *(string)*: optional caption. Also translates to the `alt` img attribute
- `src` *(string)*: path to image. Must be an absolute path or relative to project root.
- `title` *(string)*: optional title.

## License

[WTFPL](http://wtfpl.net/about/)
