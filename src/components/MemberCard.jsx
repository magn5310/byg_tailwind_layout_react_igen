import Avatar from "./Avatar";
import SecondaryButton from "./SecondaryButton";
import "../styles/membercard.css";
export default function MemberCard(props) {
  return (
    <div className="my-5 flex place-items-center justify-between">
      <div className="flex place-items-center gap-x-2 ">
        <Avatar img={props.img}></Avatar>
        <div>
          <h4 className="font-semibold">{props.name}</h4>
          <p className="text-slate-500">{props.title}</p>
        </div>
      </div>
      <SecondaryButton txt="Invite"></SecondaryButton>
    </div>
  );
}
