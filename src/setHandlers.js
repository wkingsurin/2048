export default function setHandlers({ elem, handler, func }) {
  elem.addEventListener(handler, (e) => {
    func(e);
  });
}
