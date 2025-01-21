import * as RadixAccordian from "@radix-ui/react-accordion";
import { ReactNode } from "react";

const Category = ({ children }: { children: ReactNode }) => {
  return <RadixAccordian.Root type="single">{children}</RadixAccordian.Root>;
};

const Root = Category;
Category.Root = Root;
