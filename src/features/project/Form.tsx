import { Button } from "@components/ui/Button";
import { InputField } from "@components/ui/InputField/InputField";
import { Modal } from "@components/ui/Modal/Modal";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { useAppDispatch } from "../../store/hooks";
import { add, update } from "@features/project/slice";
import type { Project } from "./type";

const projectFormSchema = z.object({
  name: z.string().trim().min(3),
  description: z.string().trim().min(3),
});

type TProjectFormSchema = z.infer<typeof projectFormSchema>;

type TProjectFormProps = {
  previousValue?: Project;
  afterSave: () => void;
};

const ProjectForm = ({ previousValue, afterSave }: TProjectFormProps) => {
  const { register, handleSubmit } = useForm<TProjectFormSchema>({
    resolver: zodResolver(projectFormSchema),
    defaultValues: previousValue,
  });

  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<TProjectFormSchema> = (data) => {
    if (previousValue) {
      const id = previousValue.id;
      dispatch(update({ id, ...data }));
    } else {
      dispatch(add(data));
    }
    afterSave();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputField.Root>
        <InputField.Label>Name</InputField.Label>
        <InputField.Input {...register("name")} />
      </InputField.Root>
      <InputField.Root>
        <InputField.Label>About</InputField.Label>
        <InputField.TextArea {...register("description")} />
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

export { ProjectForm };
