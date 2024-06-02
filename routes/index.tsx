import { Menu } from "../components/Menu.tsx";
import { mockData } from "../models/mockData.ts";

const Home = () => {
  return <Menu items={mockData} title="The Menu" />;
};

export default Home;
