
export const useMenu = () => {

    const viewport = useViewport()
    const isMenuOpen = useState('menu-open',() => {
          return viewport.isGreaterOrEquals('desktop')
    })

      watch(() => viewport.breakpoint.value, (newBreakpoint) => {
        if (viewport.isGreaterOrEquals('desktop')) {
            isMenuOpen.value = true
        } 
        else {
            isMenuOpen.value = false
        }
    })

    const toggleMenu = (): void => {
        isMenuOpen.value = !isMenuOpen.value
    }

    const closeMenu = () => {
        isMenuOpen.value = false
    }
    return {
        isMenuOpen,
        toggleMenu,
        closeMenu
    }
}