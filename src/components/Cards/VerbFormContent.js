// import styles from "./VerbFormContent.module.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { speakHandler } from "../../utils/helper";
import VolumeButton from "../UI/common/VolumeButton";

const VerbFormContent = ({ label, value, icon, isUsed }) => {
  return (
    <div
      style={{ display: "inline-block", cursor: "pointer" }}
      onClick={() => speakHandler(value)}
    >
      <VolumeButton />
      <span>
        <small>{label}</small> {value}
      </span>
    </div>
  );
};

export default VerbFormContent;
