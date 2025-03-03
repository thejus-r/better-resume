import { Button } from "@components/ui/Button/Button"
import { InputField } from "@components/ui/InputField/InputField"
import { Modal } from "@components/ui/Modal/Modal"
import { SubmitHandler, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { personalDetailsSchema, TPersonalDetailsSchema } from "../../schemas/personalDetailsSchema"
import { usePersonalExperienceStore } from "../../store/personalStore"

type TPersonalDetailsFormProps = {
  afterSave: () => void
}

const PersonalDetailsForm = ({ afterSave }: TPersonalDetailsFormProps) => {


  const update = usePersonalExperienceStore((state) => state.updateDetails)

  const { register, handleSubmit, formState: { errors } } = useForm<TPersonalDetailsSchema>({
    resolver: zodResolver(personalDetailsSchema),
  })

  const onSubmit: SubmitHandler<TPersonalDetailsSchema> = (data) => {
    update(data)
    afterSave()
  }

  return <form onSubmit={handleSubmit(onSubmit)}>

    <InputField.Root error={errors.name != undefined} >
      <InputField.Label>Name</InputField.Label>
      <InputField.Input
        {...register("name")}
      />
      <InputField.Error> {errors.name?.message}</InputField.Error>
    </InputField.Root>
    <InputField.Root error={errors.role != undefined}>
      <InputField.Label>Role</InputField.Label>
      <InputField.Input
        {...register("role")}
      />
      <InputField.Error> {errors.name?.message}</InputField.Error>
    </InputField.Root>
    <InputField.Root error={errors.email != undefined}>
      <InputField.Label>Email</InputField.Label>
      <InputField.Input
        {...register("email")}
      />
      <InputField.Error> {errors.email?.message} </InputField.Error>
    </InputField.Root>
    <div className="flex w-full flex-row gap-4">
      <InputField.Root error={errors.phoneNumber != undefined}>
        <InputField.Label>Phone Number</InputField.Label>
        <InputField.Input
          {...register("phoneNumber")}
        />
        <InputField.Error> {errors.phoneNumber?.message}</InputField.Error>
      </InputField.Root>
      <InputField.Root error={errors.place != undefined}>
        <InputField.Label>Place</InputField.Label>
        <InputField.Input
          {...register("place")}
        />
        <InputField.Error> {errors.place?.message}</InputField.Error>
      </InputField.Root>
    </div>
    <div className="mt-4 flex w-full items-center justify-end gap-2">
      <Modal.Close asChild>
        <Button intent={"destructive"}>
          Cancel
        </Button>
      </Modal.Close>
      <Button type="submit">Save</Button>
    </div>
  </form>
}


export { PersonalDetailsForm }
