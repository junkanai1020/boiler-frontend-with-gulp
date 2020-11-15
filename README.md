## Setup

### get started

```
$ npm install
$ npm start

```

### Screen

* サイト画面 http://localhost:8282
* スタイルガイド画面 http://localhost:4000/

## Package-Manager

* Node 9.1.1
* Gulp 3.9.1
* Webpack 3.8.1

## Frontend-Develop-Set

* npm
* Webpack
* Babel
* Gulp
* ect
* Sass
* ES6
* jQuery

## Frontend-Develop-Support-Set

* ESLint

## Directory

```
{project}
│
+-- app 出力ディレクトリ
| `-- css
| `-- fonts
| `-- images
| `-- js
| `-- *.html
│
+-- node_modules npmモジュール格納
|
+-- src 開発ディレクトリ
| `-- images 画像圧縮実行ディレクトリ
| `-- js
|     `-- components JSコンポーネント実装ディレクトリ
|     `-- utils JS汎用ファイル実装ディレクトリ
|     `-- app.js エントリーポイントファイル
| `-- sass Sassディレクトリ
|     `-- base 基本スタイル設定ディレクトリ
|     `-- components elementsを組み合わせたコンポーネント設定ディレクトリ
|     `-- elements 最小パーツ設定ディレクトリ
|     `-- layout ヘッダーやフッターなどレイアウト設定ディレクトリ
|     `-- utilities 変数やmixinを使ったブレイクポイント、余白など汎用設定ディレクトリ
|     `-- entry.scss エントリーポイントファイル
| `-- template ectテンプレートディレクトリ
|     `-- layout ラッパーディレクトリ
|     `-- main ページ用ディレクトリ
|     `-- partials 読み込み用ディレクトリ
|
+-- styleguide ES5styleguide用ディレクトリ
+-- .babelrc babel設定ファイル
+-- .editorconfig エディタ設定ファイル
+-- .eslintrc ES6構文チェックファイル
+-- .gitignore
+-- gulpfile.js Gulp設定ファイル
+-- overview.md ES5styleguide生成用ファイル
+-- package.json npmモジュール読み込み設定ファイル
+-- README.md
+-- webpack.config.js Webpack設定ファイル(JS各種ビルド設定)
```
