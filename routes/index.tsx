import { Menu } from "../components/Menu.tsx";
import { mockCocktails } from "../models/mockData.ts";

const Home = () => {
  return <Menu items={mockCocktails} title="The Menu" />;
};

export default Home;
