export const useMenu = () => {
    const isMenuOpen = useState('menu-open',() => false)

    const toggleMenu = (): void => {
        isMenuOpen.value = !isMenuOpen.value
        console.log(isMenuOpen.value)
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