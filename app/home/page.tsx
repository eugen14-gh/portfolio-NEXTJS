

const HomePage: React.FC = () => {
    return (
        <div className="bg-black">
            <div id="loading"></div>
            <header id="header" className=" container z-999 sticky top-0 bg-gray-50 border-gray-300 border-b-1 py-2">
                <nav className="grid grid-cols-4 gap-6 px-5">
                    <div>A</div>
                    <div className="col-start-4 justify-self-end">B</div>
                </nav>
            </header>
            <div className="main flex-col bg-gray-50 rounded-4xl flex h-[1800px] overflow-hidden relative"></div>
            <div className="footer bg-[#0a0a0a] h-[300px] sticky"></div>
        </div>

    );
};

export default HomePage;