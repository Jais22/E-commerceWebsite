import React, { useEffect, useState } from 'react'
import axios from 'axios'
import shop from "../../assets/shop.jpeg"
import { Link } from 'react-router-dom'

//https://dummyjson.com/products/categories

const AllProducts = ({ AddToCart }) => {
    const [categories, setCategories] = useState([])
    const [allProducts, setAllProducts] = useState([])
    const [selectProducts, setSelectProducts] = useState("")
    const [originalProducts, setOriginalProducts] = useState([])
    const [searchItem,setSearchItem]=useState("")


    //AllProducts
    useEffect(() => {
        const AllProducts = async () => {
            const res = await axios('https://dummyjson.com/products')
            setAllProducts(res.data.products);
            setOriginalProducts(res.data.products)
        }
        AllProducts();
    }, [])

    //product Category
    useEffect(() => {
        const getAllProducts = async () => {
            try {
                const res = await axios("https://dummyjson.com/products/categories");
                setCategories(res.data);
            }
            catch (error) {
                console.log(error);
            }

        };
        getAllProducts();

    }, [])

    const filterProducts = (selectCategory) => {
        setSelectProducts(selectCategory)
        //console.log(allProducts);
        const data = selectCategory ? originalProducts.filter((filteritems) => filteritems.category === selectCategory)
            : originalProducts
        setAllProducts(data);

    }


//search product
    
    const handleSearchByButton=()=>{
        const searchProduct=originalProducts.filter((searchFilterItem)=>
        (
            searchFilterItem.title.toLowerCase().includes(searchItem.toLowerCase())
        ))
        setAllProducts(searchProduct)
    }

    return (
        <>
            
                <div className='relative '>
                    <img src={shop} alt='no' className='w-full object-cover object-center h-[500px]' />

                    <div className='w-full h-[500px] bg-black absolute top-0 left-0 opacity-[.4] '></div>
                    <h2 className='absolute top-[60%] left-[10%] text-white font-semibold text-3xl md:text-5xl '>
                        All Produts</h2>
                </div>
                {/*Product Category Section*/}

                <div className='text-center mt-4'>
                    <select onChange={(e) => filterProducts(e.target.value)}>
                        <option>Filter By Category</option>
                        {
                            categories.slice(0,6)
                            //categories.filter((filteritem) =>
                            // !["lighting", "motorcycle", "automotive", "furniture"].includes(filteritem))
                                .map((item, index) =>
                                (
                                    <option value={item} key={index}>
                                        {item}
                                    </option>
                                     )) }
                    </select>
                </div>
                {/* product search by item*/}

                <div className='text-center mt-3 text-2xl'>
                    <input placeholder='search item'
                    className='border-4 px-2 py-2' 
                    onChange={(e)=>setSearchItem(e.target.value)}
                    value={searchItem}/>
                    <button className='bg-black text-white px-2 py-2 ml-4 rounded-md' onClick={handleSearchByButton}>Search Product</button>
                </div>
               {/* All products*/}

                <section className='text-gray-600 body-font'>
                    <div className='container px-5 py-24 mx-auto'>
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
                        {/*map start*/}
                    {allProducts.map((AllItem) =>
                        (
                            <div className='w-[90%] px-4 py-4 shadow-lg rounded-md' key={AllItem.id}>
                                <Link className='block relative h-48 rounded overflow-hidden' to={`/singleProduct/${AllItem.id}`}> 

                                <img src={AllItem.thumbnail} 
                                alt='ecommerce' 
                                className='object-cover object-center block rounded-t-lg w-full h-full' />
                                </Link>
                                <div className='mt-4'>
                                    <h3 className='text-gray-500 text-xs tracking-widest title-font mb-1'>Title:{AllItem.title}</h3>
                                    <h2 className='text-gray-900 title-font text-lg font-medium'>Rating:{AllItem.rating}</h2>
                                    <p className='mt-1'>Price:{AllItem.price}Rs.</p>
                                    <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 
                                    focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-700
                                    dark:hover:bg-blue-700 dark:focus:ring-blue-800' onClick={()=>AddToCart(AllItem)}>Add To Cart</button>


                                </div>

                            </div>
                        ))
                    }

                </div>
                    </div>
                </section>








            </>
    
    )
}

export default AllProducts