import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
// import mkcert from 'vite-plugin-mkcert';
import fs from 'fs';

import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
// export default defineConfig({
//     plugins: [vue()]
// });

export default ({ mode }) => {
    const env = loadEnv(mode, process.cwd()); // 加载当前环境的环境变量
    return defineConfig({
        base: `./`,
        //mkcert(),
        plugins: [
            vue(),
            stripDevCSS(env),
            AutoImport({
                resolvers: [ElementPlusResolver()]
            }),
            Components({
                resolvers: [ElementPlusResolver()]
            })
        ],
        server: {
            https: env.VITE_ENV === 'HTTPS' ? true : false
        },
        resolve: {
            alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }]
        },
        build: {
            rollupOptions: {
                external: new RegExp('/mock/.*')
            } // ...etc.
        }

        // async configureServer(server) {
        //   const key = await fetch("/src/assets/key/localhost-key.pem").then((res) =>
        //     res.text()
        //   );
        //   const cert = await fetch("/src/assets/key/localhost.pem").then((res) =>
        //     res.text()
        //   );
        //   server.httpsOptions = { key, cert };
        // },
    }); //end: defineConfig
}; //end: default

function stripDevCSS(env) {
    return {
        name: 'strip-dev-css',
        resolveId(source) {
            return source === 'virtual-module' ? source : null;
        },
        renderStart(outputOptions, inputOptions) {
            const outDir = outputOptions.dir;
            const cssDir = path.resolve(outDir, 'mock');
            console.log('????', outDir, cssDir);
            if (env.VITE_ENV !== 'MOCK') {
                fs.rmdir(cssDir, { recursive: true }, () => console.log(`Deleted ${cssDir}`));
            }
        }
    };
}
