import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    'src/app',
  ],
  declaration: false,
  clean: true,
  rollup: {
    emitCJS: false,
  },
})
