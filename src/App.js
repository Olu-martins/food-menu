import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';


const App = () => {

  const allCategories = ['all', ...new Set(items.map((item)=>item.category))]
  console.log(allCategories)
  
  const [menuItems, setMenuItems] = useState(items);
  // eslint-disable-next-line
  const [categories, setCategories] = useState(allCategories);
 

  const HandleFilterItems = (category) => {
    if(category === 'all'){
      setMenuItems(items)
      return;
    } 
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems)
    
  }

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems = {HandleFilterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  )
}

export default App