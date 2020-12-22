import { reactive, computed, readonly } from 'vue'

const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536
}

const state = reactive({
  currentWidth: null,
  mode: computed(() => {
    if (state.currentWidth === null) return
    if (state.currentWidth >= breakpoints.xl) {
      return 'desktop'
    } else if (state.currentWidth >= breakpoints.md) {
      return 'tablet'
    } else {
      return 'mobile'
    }
  })
})

state.currentWidth = window.innerWidth

window.addEventListener('resize', () => {
  state.currentWidth = window.innerWidth
})

export default readonly(state)
