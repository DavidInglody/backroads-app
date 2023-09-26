import { pageLinks } from "../data"

const PageLink = (props) => {
  return <ul className={props.parentClass} id="nav-links">
        {pageLinks.map((section)=>{
            const {id,href,text} = section
            return <li key={id} >
              <a className={props.itemClass} href={href}>{text}</a>
            </li>
        })}
    </ul>
}
export default PageLink