import { TextField } from "@components/TextField";

const EducationForm = () => {
  return (
    <form className="flex flex-col border border-solid border-gray-200 p-4 pb-2">
      <TextField>
        <TextField.Label>Course</TextField.Label>
        <TextField.Input />
      </TextField>

      <TextField>
        <TextField.Label>University/College</TextField.Label>
        <TextField.Input />
      </TextField>

      <TextField>
        <TextField.Label>Year</TextField.Label>
        <TextField.Input />
      </TextField>
    </form>
  );
};

export { EducationForm };
