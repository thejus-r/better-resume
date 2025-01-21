import * as Accordian from "@radix-ui/react-accordion";
import { sectionsConfig } from "../../configs/sections";
import { CaretDown } from "@phosphor-icons/react";
import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";

function Section() {
  return (
    <Accordian.Root
      className="flex flex-col gap-2 text-sm text-black"
      type="multiple"
    >
      {sectionsConfig.map((section, index) => {
        const Icon = section.icon;
        return (
          <AnimatePresence>
            <Accordian.Item
              className="flex flex-col border border-gray-100"
              value={section.name}
              key={index}
            >
              <Accordian.Header>
                <Accordian.Trigger className="flex w-full items-center bg-neutral-100 [&[data-state=open]>svg]:rotate-180">
                  <div className="flex h-10 w-10 items-center justify-center bg-black text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="flex w-full justify-between px-2 font-mono">
                    {section.name}
                    <CaretDown size={16} />
                  </div>
                </Accordian.Trigger>
              </Accordian.Header>
              <Accordian.Content className="p-4">
                <FakeCard />
              </Accordian.Content>
            </Accordian.Item>
          </AnimatePresence>
        );
      })}
    </Accordian.Root>
  );
}

const FakeCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: -20 }}
      animate={{ opacity: 1, translateY: 0 }}
      exit={{ opacity: 0, translateY: -20 }}
      className="flex flex-col border border-gray-100 p-4"
    >
      <div className="flex items-center justify-between">
        <h3 className="text-base">UI/UX Designer</h3>
        <p className="font-mono text-gray-400">April 2023 - October 2024 </p>
      </div>
      <p className="text-gray-500">at Flooid LLP</p>
      <p className="">
        Supported the product team in understanding basic requirements for
        portfolio management, analytics and risk Contributed to coding updates
        and minor alterations under mentorship Assisted in resolving entry-level
        problems with guidance, using cloud and web technologies
      </p>
    </motion.div>
  );
};

export { Section };
