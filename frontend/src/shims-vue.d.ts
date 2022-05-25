/**
 * this solves issues with VS Code showing an error when importing modules like this:
 * Cannot find module '../views/HomeView.vue' or its corresponding type declarations
 * 
 * solution given here: https://stackoverflow.com/questions/54839057/vscode-showing-cannot-find-module-ts-error-for-vue-import-while-compiling-doe
 * https://forum.vuejs.org/t/typescript-configuration-and-ts2307-cannot-find-module-error/26636
 * 
 * Vue Guide: https://vuejs.github.io/vetur/guide/setup.html#project-setup
 */
declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    const component: DefineComponent<{}, {}, any>
    export default component
  }