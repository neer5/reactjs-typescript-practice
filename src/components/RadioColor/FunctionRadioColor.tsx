import { ChangeEvent, useState } from "react";
type RadioColorState = React.CSSProperties["backgroundColor"];
type RadioColorProps = { backgroundColor: RadioColorState };

export const FunctionRadioColor = (props: RadioColorProps) => {
  const [backgroundColor, setBackgroundColor] = useState<RadioColorState>(
    props.backgroundColor
  );
  const onChangeColor = (event: ChangeEvent<HTMLInputElement>) => {
    setBackgroundColor(event.target.value);
  };
  return (
    <>
      <h2>This is function radio color</h2>
      <div>
        <input
          onChange={onChangeColor}
          type="radio"
          value="lime"
          name="color"
        />{" "}
        Lime
        <input
          onChange={onChangeColor}
          type="radio"
          value="aquamarine"
          name="color"
        />{" "}
        Marine
        <input
          onChange={onChangeColor}
          type="radio"
          value="plum"
          name="color"
        />{" "}
        Plum
      </div>
      <div style={{ backgroundColor }}>CHECK CLASS BACKGROUND COLOR</div>
    </>
  );
};
