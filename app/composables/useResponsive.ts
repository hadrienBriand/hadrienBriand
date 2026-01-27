export const useResponsive = () => {
  const { $viewport } = useNuxtApp()

  const responsive = computed(() => {
    const breakpoint = $viewport.breakpoint.value 
    return breakpoint === "tablet" || breakpoint === "mobile"
  })


  const breakpoint = computed(() => $viewport.breakpoint.value)

  return {
    responsive,
    breakpoint
  }
}