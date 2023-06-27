import video from "../assets/bg.mp4";
export default function Header() {
    return (
        <header className="relative flex flex-col justify-center items-center bg-white h-screen overflow-hidden">
            <section className="relative p-10 md:p-40 z-10">
                <h2 className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold drop-shadow-lg mb-5">Hello there, it's Steve</h2>
                <h1 className="text-white text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-bold drop-shadow-lg xl:mr-20">Student, Web designer & Software Engineer</h1>
            </section>
            <section className="absolute bottom-0 flex justify-between w-full p-10 z-10">
                <span className="text-white text-sm tracking-wider opacity-50">© Stefan So, All Rights Reserved</span>
                <span className="text-white text-right text-sm tracking-wider opacity-50">2023 - 2024</span>
            </section>
            <video className="absolute h-full w-full object-cover object-center" src={video} autoPlay muted loop />
        </header>
    )
}