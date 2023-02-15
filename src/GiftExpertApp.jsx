import { useState } from 'react';
import { AddCategory , GiftGrid } from './components';

export const GiftExpertApp = () => {
    //hooks para mantener el estado
    const [ categories  , setCategories ] = useState([ 'Shingeki No Kyojin' ]);

    const onAddCategory = ( newCategory ) =>{ 
        //categories.push(newCategory);
        if( categories.includes(newCategory) ) return;


        setCategories([ newCategory, ...categories ]);
    
    };


    return(
        <>
            
            <h1>GiftExpertApp</h1>

            
            <AddCategory 
                //setCategories={ setCategories }
                onNewCategory={ (value) => onAddCategory(value) }

            />
      
            { 
                categories.map( (category) =>(
                    <GiftGrid 

                        key={category} 
                        category ={category}

                    />            
                    
                ) ) 
            }
                
               
        </>
    )
}