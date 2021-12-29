import Link from "next/link";

const Header = () => {
  return (
    <header className=" bg-blue-600 w-full sticky top-0">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img src="/logoo.png" className="w-16 h-16  object-center" alt="" />
          <h2 className="text-2xl font-bold text-blue-50">Tracking cars</h2>
        </div>
        <div className=" flex items-center space-x-4 ">
          <Link href="/">
            <a className="text-white hover:text-orange-600 hover:font-semibold hover:underline hover:underline-offset-4">
              Acceuil
            </a>
          </Link>
          <Link href="/clients">
            <a className="text-white hover:text-orange-600 hover:font-semibold hover:underline hover:underline-offset-4">
              Clients
            </a>
          </Link>
          <Link href="/">
            <a className="text-white hover:text-orange-600 hover:font-semibold hover:underline hover:underline-offset-4">
              Services
            </a>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
