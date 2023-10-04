import s from "./ButtonGroup.module.css";

export interface ButtonGroupProps {
  changeBackgroundColor: (color: string) => void;
}

interface BackgroundProps {
  backgroundColor: string;
  width: string;
  height: string;
}

export function ButtonGroup({ changeBackgroundColor }: ButtonGroupProps) {
  return (
    <div className={s.container}>
      <button
        className={s.button_white}
        onClick={() => changeBackgroundColor("")}
      >
        Background
      </button>
      <button
        className={s.button_white}
        onClick={() => changeBackgroundColor("white")}
      >
        White
      </button>
      <button
        className={s.button_light_blue}
        onClick={() => changeBackgroundColor("lightblue")}
      >
        Light Blue
      </button>
      <button
        className={s.button_light_green}
        onClick={() => changeBackgroundColor("lightgreen")}
      >
        Light Green
      </button>
      <button
        className={s.button_light_pimk}
        onClick={() => changeBackgroundColor("lightpink")}
      >
        Light Pink
      </button>
    </div>
  );
}

