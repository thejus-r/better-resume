import style from "./textfield.module.scss";

const TextField: React.FC = ({}) => {
  return (
    <div className={style.field}>
      <TextLabel>username of the world</TextLabel>
      <input
        className={style.field_input}
        placeholder="Thejus Rajendran"
      ></input>
      <p className={style.field_helper}>Error Text</p>
    </div>
  );
};

export interface TextLabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {}

const TextLabel: React.FC<TextLabelProps> = ({ ...props }) => {
  return <label {...props} className={style.field_label} />;
};

const Root = TextField;
const Label = TextLabel;

export { Root, Label };
