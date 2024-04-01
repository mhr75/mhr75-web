import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
selectedPage : SelectedPage;
setSelectedPage: (value: SelectedPage)=> void;
};

const DotGroup = ({ selectedPage, setSelectedPage }: Props) => {
  const selectedStyles = `relative bg-yellow before:absolute before:w-6 before:h-6 before:rounded-full
    before:border-2 before:border-yellow before:left-[-50%] before:top-[-50%]`;

  return (
    <div className="flex flex-col gap-6 fixed top-[60%] right-7">
      <AnchorLink
        href="#home"
        className={`${
          selectedPage === "home" ? selectedStyles : "bg-dark-grey"
        } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage(SelectedPage.Home)}
      />

      <AnchorLink
        href="#skills"
        className={`${
          selectedPage === SelectedPage.Skills ? selectedStyles : "bg-dark-grey"
        } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage(SelectedPage.Skills)}
      />

      <AnchorLink
        href="#projects"
        className={`${
          selectedPage === SelectedPage.Projects ? selectedStyles : "bg-dark-grey"
        } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage(SelectedPage.Projects)}
      />

      <AnchorLink
        href="#testimonials"
        className={`${
          selectedPage === SelectedPage.Testimonials ? selectedStyles : "bg-dark-grey"
        } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage(SelectedPage.Testimonials)}
      />

      <AnchorLink
        href="#contact"
        className={`${
          selectedPage === SelectedPage.Contact ? selectedStyles : "bg-dark-grey"
        } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage(SelectedPage.Contact)}
      />
    </div>
  );
};

export default DotGroup;
