const Header = () => {
    const logo = "/jpeg/logo.jpg"
    return (
        <div className="flex-1">
            <img src={logo} className="border-4 border-black-900 border-dotted mx-auto w-40 h-40 rounded-full border-black " alt="logo" />   
            <div className="text-4xl text-bold text-center py-5 px-5">Temple THC</div>
        </div>
        );
};

export default Header;