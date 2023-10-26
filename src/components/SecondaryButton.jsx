import { AiOutlinePlus } from "react-icons/ai";

export default function SecondaryButton(props) {
  return (
    <div>
      <button className="flex place-items-center gap-x-2 font-bold">
        <AiOutlinePlus></AiOutlinePlus>
        {props.txt}
      </button>
    </div>
  );
}
