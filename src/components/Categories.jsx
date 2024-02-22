export const Categories = ({ categories }) => {
    
    return <ul className="p-0 d-flex flex-column">
        {   
            categories.map(category => (
                <li className="my-2 btn btn-primary" key={category.sys.id}>
                    {category.fields.categoryTitle}
                </li>
            ))
        }
    </ul>
}