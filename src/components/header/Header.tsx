import Link from "next/link";

const links = [
  {
    name: "Breakfast",
    href: "#",
  },
  {
    name: "Lunch",
    href: "#",
  },
  {
    name: "Dinner",
    href: "#",
  },
];

const Header = () => {
  return (
    <header className="px-[92px] py-[20px] mt-2">
      <Link legacyBehavior passHref href="#">
        <a className="inline-block mr-[160px] align-middle p-2">
          <img
            src="/logo.png"
            alt="Главная"
            width={105}
            height={27}
            className="w-[105px] h-auto"
          />
        </a>
      </Link>
      <nav className="inline-flex flex-row justify-center align-center space-x-[52px] align-middle">
        {links.map((link) => (
          <Link
            legacyBehavior
            passHref
            href={link.href}
            key={link.name}
          >
            <a className="text-[14px] font-medium p-2 hover:bg-[rgba(0,0,0,0.1)] bg-change-transition rounded-sm">
              {link.name}
            </a>
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
