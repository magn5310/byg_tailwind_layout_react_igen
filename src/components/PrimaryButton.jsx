import "../styles/primarybutton.css";
export default function PrimaryButton(props) {
  return (
    <div>
      <button className="font-roboto rounded-xl bg-blue-700 px-4 py-2 text-neutral-50">
        {props.text}
      </button>
    </div>
  );
}
