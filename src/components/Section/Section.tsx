import * as Accordian from "@radix-ui/react-accordion";
import { sectionsConfig } from "../../configs/sections";
import { CaretDown } from "@phosphor-icons/react";
import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";
import { useState } from "react";
import { TextField } from "@components/TextField";

function Section() {
  const [current, setCurrent] = useState<Array<string>>([]);
  console.log(current);
  return (
    <Accordian.Root
      onValueChange={(value) => setCurrent(value)}
      className="flex flex-col gap-2 text-sm text-black"
      type="multiple"
    >
      {sectionsConfig.map((section, index) => {
        const Icon = section.icon;
        const isActive = current.includes(section.name) ? true : false;
        return (
          <Accordian.Item
            className="flex flex-col border border-gray-100"
            value={section.name}
            key={index}
          >
            <Accordian.Header>
              <Accordian.Trigger className="flex w-full items-center bg-neutral-100">
                <div className="flex h-10 w-10 items-center justify-center bg-black text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="flex w-full justify-between px-4 font-mono">
                  {section.name}
                  <CaretDown
                    className={
                      isActive
                        ? "rotate-180 transition-all duration-200"
                        : "rotate-0 transition-all duration-200"
                    }
                    size={16}
                  />
                </div>
              </Accordian.Trigger>
            </Accordian.Header>
            <AnimatePresence>
              {isActive && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                >
                  <Accordian.Content forceMount>
                    <form className="flex h-48 gap-4 border border-solid border-gray-200 p-4">
                      <TextField>
                        <TextField.Input disabled placeholder="Thejus" />
                        <TextField.Label state={"disabled"}>
                          First Name
                        </TextField.Label>
                      </TextField>
                      <TextField>
                        <TextField.Input placeholder="Rajendran" />
                        <TextField.Label>Last Name</TextField.Label>
                      </TextField>
                    </form>
                  </Accordian.Content>
                </motion.div>
              )}
            </AnimatePresence>
          </Accordian.Item>
        );
      })}
    </Accordian.Root>
  );
}

export { Section };
