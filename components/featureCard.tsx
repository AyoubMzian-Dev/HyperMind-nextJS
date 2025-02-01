import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { masterPlan } from "@fortawesome/free-solid-svg-icons";



interface featureCardProp {
    title: string
    description: string
    icon?: JSX.Element
}
export const FeatureCard = ({icon, title, description}:featureCardProp) => {
  return (
    <div>
        <FontAwesomeIcon

        className="fas fa-check"
        style={{ color: "red", fontSize: 64 }}
      />
        <h2>{title}</h2>
        <p>{description}</p>
    </div>
  )
}
