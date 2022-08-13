import classNames from 'classnames'
import { useLocation, useNavigate } from '@solidjs/router'

const listingItems = {
  Relevance: [
    {
      name: 'Trending',
      filter: 'trending',
    },
    {
      name: 'Price: Low to High',
      filter: 'price-low-to-high',
    },
    {
      name: 'Price: High to Low',
      filter: 'price-high-to-low',
    },
  ],
}

const RightSidebar = ({}) => {
  const location = useLocation()
  const navigate = useNavigate()
  const filter = new URLSearchParams(location.search.substring(1)).get('filter')
  return (
    <div className="flex w-full flex-col pl-5">
      {Object.keys(listingItems).map((item, index) => (
        <section className="flex flex-col" key={item}>
          <h2 className={classNames({ 'mt-10': index > 0 }, 'text-white', 'text-lg', 'font-medium')}>{item}</h2>
          {listingItems[item].map((subItem) => (
            <a
              key={subItem.name}
              className="cursor-pointer"
              onClick={(e) => {
                e.preventDefault()
                if (typeof window !== undefined) {
                  navigate(`${window.location.pathname}?filter=${subItem.filter}`)
                }
              }}
            >
              <h3
                className={classNames(
                  'text-md mt-2',
                  { 'font-light text-[#FFFFFF75]': filter !== subItem.filter },
                  { 'font-medium text-[#FFFFFF]': filter === subItem.filter }
                )}
              >
                {subItem.name}
              </h3>
            </a>
          ))}
        </section>
      ))}
    </div>
  )
}

export default RightSidebar
