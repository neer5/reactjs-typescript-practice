import ButtonCounter from "./ButtonCounter";
import HoverCounter from "./HoverCounter";
import ParentComp from "./ParentComp";
import PureComp from "./PureCom";
import RegComp from "./RegComp";
import { WithCounterHocProps } from "./types";

export const Advanced = () => {
  const props = {
    name: 'Tim'
  };
    return (
      <>
        <h2>Advanced Topics</h2>
        <ButtonCounter {...props as WithCounterHocProps} />
        <HoverCounter {...props as WithCounterHocProps} />
        <ParentComp />
      </>
    );
  }
  