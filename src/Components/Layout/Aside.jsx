import { Navigations, ThemeToggler } from "Components";

export const Aside = () => (
  <aside>
    <Navigations />
    <div className="card-mod mt-3">
      <ThemeToggler />
    </div>
  </aside>
);
