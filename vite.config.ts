import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import path from "path";

const config: UserConfig = {
	plugins: [sveltekit()],
	resolve: {
        alias: {
            $actions: path.resolve("./src/actions"),
            $components: path.resolve("./src/components"),
            $data: path.resolve("./src/data"),
            $stores: path.resolve("./src/stores"),
            $styles: path.resolve("./src/styles"),
            $svg: path.resolve("./src/svg"),
            $utils: path.resolve("./src/utils"),
            $static: path.resolve("./static"),
            $logos: path.resolve("./src/logos"),
            $svgs: path.resolve("./src/svgs"),
        }
    }
};

export default config;
