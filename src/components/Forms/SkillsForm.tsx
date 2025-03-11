import { Button } from "@components/ui/Button";
import { InputField } from "@components/ui/InputField/InputField";
import { Modal } from "@components/ui/Modal/Modal";

import { SubmitHandler, useForm } from "react-hook-form";

import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { addMultiple } from "../../features/skills/skillsSlice";
import { ArrayToCSString, CSStingToArray } from "../../utils/strUtils";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

type TSkillFormProps = {
  afterSave: () => void;
};

const skillFormSchema = z.object({
  skillsString: z.string(),
});

type TSkillFormSchema = z.infer<typeof skillFormSchema>;

const SkillsForm = ({ afterSave }: TSkillFormProps) => {
  const skillList = useAppSelector((state) => state.skills.list);
  const dispatch = useAppDispatch();

  const list = skillList.map((skill) => skill.name);

  const { register, handleSubmit } = useForm<TSkillFormSchema>({
    resolver: zodResolver(skillFormSchema),
    defaultValues: {
      skillsString: ArrayToCSString(list),
    },
  });

  const onSubmit: SubmitHandler<TSkillFormSchema> = (data) => {
    console.log(data.skillsString);
    dispatch(addMultiple(CSStingToArray(data.skillsString)));
    afterSave();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputField.Root>
        <InputField.Label>Name</InputField.Label>
        <InputField.Input {...register("skillsString")} />
        <InputField.Error>Error</InputField.Error>
      </InputField.Root>
      <div className="mt-4 flex w-full items-center justify-end gap-2">
        <Modal.Close asChild>
          <Button intent={"destructive"}>Cancel</Button>
        </Modal.Close>
        <Button type="submit">Save</Button>
      </div>
    </form>
  );
};

export { SkillsForm };
