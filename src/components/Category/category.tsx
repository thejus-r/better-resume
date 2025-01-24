import * as RadixAccordion from "@radix-ui/react-accordion";
import { createContext, ReactNode, useContext, useState } from "react";
import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";

interface CategoryContextType {
  current: string;
}
const CategoryContext = createContext<CategoryContextType>({ current: "" });

const Category = ({ children }: { children: ReactNode }) => {
  const [current, setCurrent] = useState("");
  return (
    <CategoryContext.Provider value={{ current: current }}>
      <RadixAccordion.Root
        value={current}
        onValueChange={setCurrent}
        className="flex w-full flex-col gap-2"
        type="single"
      >
        {children}
      </RadixAccordion.Root>
    </CategoryContext.Provider>
  );
};

interface ItemProps {
  children: ReactNode;
  value: string;
}

type ItemContextType = boolean;

const ItemContext = createContext<ItemContextType>(false);

const Item = ({ children, value }: ItemProps) => {
  const { current } = useContext(CategoryContext);

  return (
    <ItemContext.Provider value={current == value ? true : false}>
      <RadixAccordion.Item
        className="border border-solid border-gray-800"
        value={value}
      >
        {children}
      </RadixAccordion.Item>
    </ItemContext.Provider>
  );
};

interface TitleProps {
  children: ReactNode;
}

const Title = ({ children }: TitleProps) => {
  return (
    <RadixAccordion.Trigger className="w-full">
      <RadixAccordion.Header className="flex w-full bg-gray-800 p-3 font-mono text-xs uppercase tracking-wide text-white">
        {children}
      </RadixAccordion.Header>
    </RadixAccordion.Trigger>
  );
};

interface ContentProps {
  children: ReactNode;
}
const Content = ({ children }: ContentProps) => {
  const active = useContext(ItemContext);
  return (
    <AnimatePresence>
      {active && (
        <motion.div
          transition={{ duration: 0.2, ease: "easeOut" }}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
        >
          <RadixAccordion.Content className="overflow-clip" forceMount>
            {children}
          </RadixAccordion.Content>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

Category.Root = Category;
Category.Item = Item;
Category.Title = Title;
Category.Content = Content;

export { Category, Item, Title, Content };
