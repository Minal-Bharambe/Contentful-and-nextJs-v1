import "../styles/globals.css";
import Link from "next/link";
import Image from "next/image";

export default function Layout({ children }) {
    return (
      <html>    
        <body>
          <header className="flex justify-between items-center px-6 py-4 shadow">
              <Link href="/" className="flex items-center">
              <Image
                src="/beachLogo.png"
                width="100" 
                height="100"
                alt="logo"
              /><h2 className="text-xl font-bold">Beach Resort</h2>
              </Link>
            
            <nav className="flex gap-6">
              <Link href="/">Home</Link>
              <Link href="/rooms">Rooms</Link>
            </nav>
          </header>

          {children}
  
          <footer className="text-center py-4 bg-gray-100">
            © {new Date().getFullYear()} BEACHRESORT
          </footer>
        </body>
      </html>
    );
  }