function Header({ cartCount }) {
  return (
    <header className="bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

        <h1 className="text-2xl font-bold">
          TechShop
        </h1>

        <div className="flex items-center gap-6">

          <nav className="hidden gap-6 md:flex">
            <a href="#" className="text-gray-600 hover:text-black">
              Home
            </a>

            <a href="#products" className="text-gray-600 hover:text-black">
              Products
            </a>
          </nav>

          <div className="rounded-full bg-black px-4 py-2 text-sm font-medium text-white">
            Cart: {cartCount}
          </div>

        </div>
      </div>
    </header>
  );
}

export default Header;