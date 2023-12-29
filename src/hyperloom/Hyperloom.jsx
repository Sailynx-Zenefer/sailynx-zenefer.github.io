

export default function Hyperloom({ children, hyperloomBig}) {

  return (
    <div id={hyperloomBig ? "hyperloom-big" : "hyperloom"}>
      {children}
    </div>
  );
}
 