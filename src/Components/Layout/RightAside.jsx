import { ThemeToggler } from "Components";
import { useTheme } from "Theme";

export const RightAside = () => {
  const { toggleTheme } = useTheme();

  return (
    <aside>
      {/* Content for the right-side fixed section */}
      <h3>Right Section</h3>
      <h6>Theme</h6>
      <ThemeToggler
        labelLeft="Light"
        labelRight="dark"
        onChange={toggleTheme}
      />
    </aside>
  );
};
