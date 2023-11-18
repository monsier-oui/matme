# matme

## 必要なもの
- Node.js（ローカルでも動かしたい場合）
- MicroCMSアカウント
- Netlifyアカウント

## ディレクトリ構造
```
.
├── api # API設定ファイル
├── public # 画像など静的ファイル
├── src
│   ├── components
│   ├── layouts
│   ├── libs
│   ├── pages
│   │   ├── works
│   │   │   └── [slug].astro # 作品ページ
│   │   └── index.astro # 一覧ページ
│   ├── styles
│   │   └── global.css
│   ├── config.js
│   └── env.d.ts
├── README.md
├── astro.config.ts # Astro設定ファイル
├── package-lock.json
├── package.json
├── postcss.config.cjs
├── tailwind.config.ts
└── tsconfig.json
```

## セットアップ手順

1. このリポジトリをフォークする
2. MicroCMS管理がエンから`api`ディレクトリ内のJSONファイルをインポートしてAPIを作成する
3. MicroCMS管理画面->コンテンツ->サイト設定にて、適当な値を入力して保存する
4. MicroCMS管理画面->コンテンツ->タグにて、任意のタグを作成する
5. MicroCMS管理画面->コンテンツ->イラストにて、作品をアップロードする
6. MicroCMS管理画面->コンテンツ->イラスト->API設定にて、Netlify用Webhookを作成する
7. Netlifyでリポジトリからサイトを作成する
8. Netlify管理画面->Site Configuration->Build & Deploy->Build Settingsにて、Build commandを`npm run build`に、Publish directoryを`dist`に設定する
9. Netlify管理画面->Site Configuration->Build & Deploy->Build hooksにて、MicroCMSで作成したWebhookを設定する
10.  Netlify管理画面->Site Configuration->Environment variablesにて、下記の値を設定する
   - `MICROCMS_API_KEY` MicroCMSのAPIキー
   - `MICROCMS_SERVICE_DOMAIN` MicroCMSのアカウント名（管理画面サブドメイン）
   - `SITE_URL` 公開するウェブサイトのURL
11. Netlify管理画面->Deploysにて、Trigger deployを行い、ビルドに成功すれば完了