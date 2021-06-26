import { setMode } from "@stencil/core";


export default function() { // or export default async function()
  const isAllowedIonicModeValue = (elmMode) =>
    ['ios', 'md'].includes(elmMode);

  setMode((elm) => {
    while (elm) {
      const elmMode = (elm as any).mode || elm.getAttribute('mode');
      if (elmMode) {
        if (isAllowedIonicModeValue(elmMode)) {
          return elmMode;
        } else {
          console.warn('Invalid ionic mode: "' + elmMode + '", expected: "ios" or "md"');
        }
      }
      elm = elm.parentElement;
    }
    return 'md';
  });
}
