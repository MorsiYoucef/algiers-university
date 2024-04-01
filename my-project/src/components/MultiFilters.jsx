import React, { useEffect, useState } from 'react'
import { items } from '../data/data'

export default function MultiFilters() {
  const [selectedFilters, setSelectedFilters] = useState([])
  const [filteredItems, setFilteredItems] = useState(items)

  let filters = [
    'اعلانات للأساتذة',
    'النشاطات الثقافية و الرياضية',
    'طور الدكتوراه ',
    'طور الماستر ',
    'طور الليسانس ',
  ]

  const handleFilterButtonClick = (selectedCategory) => {
    if (selectedFilters.includes(selectedCategory)) {
      let filters = selectedFilters.filter((el) => el !== selectedCategory)
      setSelectedFilters(filters)
    } else {
      setSelectedFilters([...selectedFilters, selectedCategory])
    }
  }

  useEffect(() => {
    filterItems()
  }, [selectedFilters])

  const filterItems = () => {
    if (selectedFilters.length > 0) {
      let tempItems = selectedFilters.map((selectedCategory) => {
        let temp = items.filter((item) => item.category === selectedCategory)
        return temp
      })
      setFilteredItems(tempItems.flat())
    } else {
      setFilteredItems([...items])
    }
  }

  return (
    <div>
      <div className="buttons-container">
        <h1 dir="rlt">أخبار الكلية</h1>
        {filters.map((category, idx) => (
          <button
            dir="rlt"
            onClick={() => handleFilterButtonClick(category)}
            className={`button ${
              selectedFilters?.includes(category) ? 'active' : ''
            }`}
            key={`filters-${idx}`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="items-container" dir="rlt">
        {filteredItems.map((item, idx) => (
          <div key={`items-${idx}`} className="item" dir="rlt">
            <p dir="rlt">{item.name}</p>
            <p className="category" dir="rlt">
              {item.category}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
