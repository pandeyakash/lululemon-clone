import { TopNav } from "../TopNav/TopNav";
import { MiddleNav } from "../MiddleNav/MiddleNav";
import { BottomNav } from "../BottomNav/BottomNav";

export const NavBar = () => {
  return (
    <div>
      <TopNav />
      <MiddleNav />
      <BottomNav />
      <h2>Hello from NavBar</h2>
    </div>
  );
};
