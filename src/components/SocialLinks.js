import { socialLinks } from "../data"

const SocialLinks = ({parentClass, itemClass }) => {
  return  <ul className={parentClass}>
        {socialLinks.map((icona)=>{
        const {id,href,icon} = icona
        return <li key={id}>
            <a href={href} target="_blank" rel="noreferrer" className={itemClass}>
            <i className={icon}></i>
            </a>
        </li>
        })}
    </ul>
}
export default SocialLinks