import CategoryItem from "../components/category-item/category-item-components"
import './directory.styles.scss'

const Directory = ({categories}) =>{
    return(
        <div className="directory-container">
        {/* Looping through the categories object to display them one by one */}
        {categories.map((category)=>(
          // Passing the items and setting their key using their IDs one at a time to the category item component
          < CategoryItem key={category.id} category={category}/>
        ))}
      </div>
        
    )
}

export default Directory;