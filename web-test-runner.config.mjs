import { esbuildPlugin } from '@web/dev-server-esbuild';

export default ({
	files: './tests/ui/**/*.spec.ts',

	plugins: [
		esbuildPlugin({ ts: true })
	],

	nodeResolve: {
		exportConditions: ['browser', 'development'],
	}
});
