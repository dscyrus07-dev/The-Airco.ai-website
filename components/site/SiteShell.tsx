import Navbar from "./Navbar";
import Footer from "./Footer";

export default function SiteShell({ children }: { children: React.ReactNode }) {
    return (
        <main className="relative min-h-screen overflow-x-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-black">
            <Navbar />
            {children}
            <Footer />
        </main>
    );
}
