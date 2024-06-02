import "./Main.scss";

export function Main(props: { children: React.ReactNode }) {
  return <main className="main">{props.children}</main>;
}
