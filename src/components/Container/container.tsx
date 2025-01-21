import { ReactNode } from "react";

export default function Container({ children }: { children: ReactNode }) {
  return <div className="w-1/2 overflow-y-scroll p-4">{children}</div>;
}
