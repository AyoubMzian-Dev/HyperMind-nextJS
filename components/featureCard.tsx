import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

interface FeatureCardProp {
    title: string
    description: string
}

export const FeatureCard = ({title, description}: FeatureCardProp) => {
  return (
    <div>
        <FontAwesomeIcon
          icon={faCheck}
          className="fas"
          style={{ color: "red", fontSize: 64 }}
        />
        <h2>{title}</h2>
        <p>{description}</p>
    </div>
  )
}
