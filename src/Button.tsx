/*import React from "react";
export const Button = ({ backgroundColor, children }) => (
  <button style={{ backgroundColor: backgroundColor }}>{children}</button>
);
*/
import * as React from "react";
export interface Props {
  /** this dictates what the button will say  */
  children: React.ReactNode;
  /** this dictates what the button will do  */
  onClick: () => void;
  /**
   * Disables onclick
   *
   * @default false
   **/
  disabled?: boolean;
  /** this dictates the color of the button  */
  backgroundColor: string;
}
const noop = () => {};
export const Button = (props: Props) => {
  const { children, onClick, backgroundColor, disabled = false } = props;
  const disabledclass = disabled ? "Button_disabled" : "";
  return (
    <button
      className={`Button ${disabledclass}`}
      onClick={!disabled ? onClick : noop}
      style={{ backgroundColor: backgroundColor }}
    >
      <span>{children}</span>
    </button>
  );
};
