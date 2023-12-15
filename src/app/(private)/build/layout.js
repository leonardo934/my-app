import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export default function Build({ children }) {
  return (
    <>
      <Navbar />
      <div>
      {children}
      </div>
      <Footer />
    </>
  );
}
