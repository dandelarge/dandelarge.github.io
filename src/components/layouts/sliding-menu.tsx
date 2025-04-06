import { MenuIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Menu from "./menu";
import { MainMenuProps } from "@/types/types";

export function SlidingMenu({ selected, subMenus }: MainMenuProps) {
  return (
    <Sheet modal>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <Menu selected={selected} subMenus={subMenus} />
      </SheetContent>
    </Sheet>
  );
}
