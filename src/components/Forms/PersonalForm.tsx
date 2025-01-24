import { TextField } from "@components/TextField";

const PersonalForm = () => {
  return (
    <form className="flex flex-col border border-solid border-gray-200 p-4 pb-2">
      <TextField>
        <TextField.Label>full name</TextField.Label>
        <TextField.Input />
      </TextField>

      <TextField>
        <TextField.Label>Designation</TextField.Label>
        <TextField.Input />
      </TextField>
    </form>
  );
};

export { PersonalForm };
