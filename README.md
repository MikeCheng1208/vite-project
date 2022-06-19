# Vue 3 + Vite 起手專案

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)


## 開始前必看

- vue、vue-router、vue-i18n  API 自動引入
- components 組件自動引入
- 單元測試 vitest
- Router 自動生成，放入 `page/` 資料夾內
- 全域資料管理 pinia


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

- 如何改變顏色
```html
  <!-- 請先將 SVG 本身的 fill="currentColor" 屬性拿掉 -->
  <SvgIcon name="icon-phone" color="#0f00f0" />
```

- 如何改變寬高
```html
<template>
  <!-- 利用class來改變寬高 -->
  <SvgIcon name="btn-close" color="#f00000" class-name="icon-50" />
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