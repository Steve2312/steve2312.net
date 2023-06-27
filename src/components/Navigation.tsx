export default function Navigation() {
    return (
        <nav className="fixed flex justify-between w-full p-10 z-50">
            <span className="text-white text-lg font-bold tracking-wider">Hibiki</span>
            {/* TODO: Implement localization*/}
            <span className="text-white text-lg font-bold tracking-wider">EN</span>
        </nav>
    )
}