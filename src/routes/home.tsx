import Background from "../components/background";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

export async function homeLoader() {
  try {
    const response = await fetch(
      `${backendUrl}/products`,
    );

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
    <>
      <Background />
    </>
  );
}
