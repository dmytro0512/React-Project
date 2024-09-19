import { BorderColor } from "@/consts/borderColor";

const width = 2;
const width_1 = 1;

export enum TextShadow {
  dark = `0 ${width}px 0 ${BorderColor.dark}`,
  light = `0 ${width}px 0 ${BorderColor.light}`,
  heading = `0 ${width}px 0 ${BorderColor.heading}`,
  fightProgress = `inset 0 0 5px rgba(0, 0, 0, 0.2)`,
  blog = `
    2.4px 0 ${BorderColor.blog},
    -2.4px 0 ${BorderColor.blog},
    0 2.4px ${BorderColor.blog},
    0 -2.4px ${BorderColor.blog},
    1.2px 1.2px ${BorderColor.blog},
    -1.2px -1.2px ${BorderColor.blog},
    1.2px -1.2px ${BorderColor.blog},
    -1.2px 1.2px ${BorderColor.blog},
    0px 3.59px ${BorderColor.blog}
  `,
  ligh2 = `
    ${width}px 0 ${BorderColor.light},
    -${width}px 0 ${BorderColor.light},
    0 ${width}px ${BorderColor.light},
    0 -${width}px ${BorderColor.light},
    ${width_1}px ${width_1}px ${BorderColor.light},
    -${width_1}px -${width_1}px ${BorderColor.light},
    ${width_1}px -${width_1}px ${BorderColor.light},
    -${width_1}px ${width_1}px ${BorderColor.light}
  `,
  progress = `
    ${width}px 0 ${BorderColor.progress},
    -${width}px 0 ${BorderColor.progress},
    0 ${width}px ${BorderColor.progress},
    0 -${width}px ${BorderColor.progress},
    ${width_1}px ${width_1}px ${BorderColor.progress},
    -${width_1}px -${width_1}px ${BorderColor.progress},
    ${width_1}px -${width_1}px ${BorderColor.progress},
    -${width_1}px ${width_1}px ${BorderColor.progress}
  `,
  header = `
    -${width}px -${width}px 0 ${BorderColor.dark},
    ${width}px -${width}px 0 ${BorderColor.dark},
    -${width}px ${width}px 0 ${BorderColor.dark},
    ${width}px ${width}px 0 ${BorderColor.dark}
  `,
  profile = `
    -${width_1}px -${width_1}px 0 ${BorderColor.black},
    ${width_1}px -${width_1}px 0 ${BorderColor.black},
    -${width_1}px ${width_1}px 0 ${BorderColor.black},
    ${width_1}px ${width_1}px 0 ${BorderColor.black}
  `,
  battleHeader = `
    -${width_1}px -${width_1}px 0 ${BorderColor.light3},
    ${width_1}px -${width_1}px 0 ${BorderColor.light3},
    -${width_1}px ${width_1}px 0 ${BorderColor.light3},
    ${width_1}px ${width_1}px 0 ${BorderColor.light3}
  `,
}
