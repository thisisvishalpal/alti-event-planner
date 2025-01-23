import { LanguageToggler, Navigations, ThemeToggler } from "Components";

export const Aside = () => (
  <aside>
    <Navigations />
    <div className="card-mod mt-3 ps-5">
      <ThemeToggler />
      <LanguageToggler showHeading />
    </div>
  </aside>
);
