import Header from "./components/Header";
import MemberList from "./components/MemberList";
export default function App() {
  return (
    <div className="mt-10 px-[20%]">
      <Header></Header>
      <p className=" mb-3 text-slate-500 ">
        Team members previously added to projects
      </p>
      <div className=" w-full border-b"></div>
      <MemberList></MemberList>
    </div>
  );
}
