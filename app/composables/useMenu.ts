export const useMenu = () => {
    const isMenuOpen = useState('menu-open',() => false)

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