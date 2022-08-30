# Vue 3 + Vite 起手專案

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)


## 開始前必看

- vue、vue-router、vue-i18n  API 自動引入
- components 組件自動引入
- Router 自動生成，放入 `page/` 資料夾內
- 全域資料管理 pinia
- vite-SSG
- 使用 UnoCSS [DOC](https://uno.antfu.me/)


## SVG 使用

- 將所有svg icon 放入 assets/svg 中

```html
 <!-- src/assets/svg/icon-phone.svg -->
  <SvgIcon name="icon-phone" />
```

```html
 <!-- src/assets/svg/demo/btn-close.svg -->
  <SvgIcon name="demo/btn-close" />
```

- 如何改變寬高
```html
<template>
  <!-- 利用class來改變寬高 -->
  <SvgIcon name="btn-close" class-name="icon-50" />
</template>

<style>
  /* style */
  .icon-50 {
    width: 50px;
    height: 50px;
  }
</style>
```

## 使用者程式碼片段

```json
"vue": {
  "prefix": "vue",
  "body": [
    "<script setup>/n</script>",
    "<template>\n  <div></div>\n</template>",
    "<style></style>",
  ],
  "description": "vue init template"
}
```

## VS code 安裝 Prettier
```
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "[javascript]": {
      "editor.formatOnSave": true,
      "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[vue]": {
      "editor.formatOnSave": true,
      "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[css]": {
      "editor.formatOnSave": true,
      "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[scss]": {
      "editor.formatOnSave": true,
      "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[html]": {
      "editor.formatOnSave": true,
      "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "prettier.disableLanguages": []
}
```