import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/sass/app.scss', 'resources/js/app.js'],
            refresh: true,
        }),
        {
            name: 'suppress-sass-warnings',
            enforce: 'pre',
            transform(code, id) {
                if (id.endsWith('.scss')) {
                    // Suppress Sass warnings in the console
                    return {
                        code,
                        map: null,
                        warnings: [], // Ignore warnings
                    };
                }
            },
        },
    ],
});