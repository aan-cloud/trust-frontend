import Background from "../components/background";
import About from "../components/about";
import Footer from "../components/footer";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

export async function homeLoader() {
  try {
    const response = await fetch(`${backendUrl}/products`);

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const products = await response.json();

    return { products };
  } catch (error: any | unknown) {
    return { products: null };
  }
}

export default function HomeRoute() {

  return (
    <div className="flex flex-col gap-14">
      <Background />
      <About />
      <Footer />
    </div>
  );
}
