import { Input } from "@components/ui/Input";
import { Label } from "@components/ui/Label";

import { useForm } from "react-hook-form";
import { useResumeStore } from "../../store/store";
import { useEffect } from "react";

import type { PersonalDetailsType } from "@lib/formSchema";

const PersonalForm = () => {
  const { updateSection } = useResumeStore();
  const { register, watch } = useForm<PersonalDetailsType>({
    defaultValues: {
      designation: "",
      email: "",
      name: "",
      phoneNumber: "",
      place: "",
    },
  });

  useEffect(() => {
    const { unsubscribe } = watch((value) => {
      updateSection("personal", {
        sectionName: "personal",
        sectionDetails: value as PersonalDetailsType,
      });
    });
    return () => unsubscribe();
  }, [watch]);

  return (
    <form className="flex flex-col gap-2 border border-solid border-gray-200 p-4">
      <div>
        <h3 className="text-lg font-medium">Personal Details</h3>
        <p className="text-sm text-gray-400">Fill your personal details here</p>
      </div>
      <div>
        <Label>Full Name</Label>
        <Input
          {...register("name")}
          type="input"
          placeholder="Eg: Pam Beesly"
        />
      </div>
      <div>
        <Label>Designation</Label>
        <Input
          {...register("designation")}
          type="input"
          placeholder="Eg: Office Administrator"
        />
      </div>
      <div>
        <Label>Place</Label>
        <Input
          {...register("place")}
          type="input"
          placeholder="Eg: Scranton, Pennsylvania"
        />
      </div>
      <div className="flex gap-2">
        <div className="w-full">
          <Label>Phone Number</Label>
          <Input
            {...register("phoneNumber")}
            type="input"
            placeholder="Eg: 93304 232 11"
          />
        </div>
        <div className="w-full">
          <Label>Email</Label>
          <Input
            {...register("email")}
            type="input"
            placeholder="Eg: pambeesly@dmpaper.com"
          />
        </div>
      </div>
    </form>
  );
};

export { PersonalForm };
