export interface MainMenuProps {
  selected: string;
  subMenus?: {
    blog?: React.ReactNode;
    home?: React.ReactNode;
    author?: React.ReactNode;
  };
}
