const fileNameToComponentName = filename =>
  filename
    // remove './' from the begining
    .replace(/^\.\//, '')
    // remove extension
    .replace(/\.\w+$/, '')
    // remove dangling filename if exists
    .replace(/\/\w+$/, '')

const registerComponents = (app, requireContext) => {
  requireContext.keys().forEach(filename => {
    const componentConfig = requireContext(filename)
    const componentName = fileNameToComponentName(filename)
    app.component(componentName, componentConfig.default || componentConfig)
  })
}

export default function register(app) {
  registerComponents(app, require.context('@/components/', false, /Base.*vue$/))
  registerComponents(app, require.context('@/components/', true, /Base.*\/index.vue$/))
}
