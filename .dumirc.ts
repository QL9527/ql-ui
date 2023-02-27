import { defineConfig } from 'dumi';

let base: string | undefined = '/ql-ui';
let publicPath: string | undefined = '/ql-ui/';

if (process.env.SITE_BUILD_ENV === 'PREVIEW') {
  base = undefined;
  publicPath = undefined;
}

export default defineConfig({
  title: 'QL UI',
  // mode: 'site',
  outputPath: 'doc-site',
  exportStatic: {}, // 后续会部署到 github pages 直接全部生成静态页面 不走前端路由
  // dynamicImport: {}, // 拆包 站点过大时可以优化首屏加载速度
  chainWebpack(memo, args) {
    return memo;
  },
  base,
  publicPath,
});
