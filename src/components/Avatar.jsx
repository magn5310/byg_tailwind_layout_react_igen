import "../styles/avatar.css";

export default function Avatar(props) {
  return (
    <div>
      <img
        className="h-12 w-12 rounded-full object-cover"
        src={`../src/img/${props.img}`}
        alt=""
      />
    </div>
  );
}
