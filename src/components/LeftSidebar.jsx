import classNames from 'classnames'
import { Link, useLocation } from '@solidjs/router'

const LeftSidebar = ({ listingItems }) => {
  const location = useLocation()
  return (
    <div className="flex w-full flex-col">
      <Link
        href="/commerce"
        className={classNames(
          'text-md',
          { 'font-light text-[#FFFFFF75]': location.pathname !== `/commerce` },
          { 'font-medium text-[#FFFFFF]': location.pathname === `/commerce` }
        )}
      >
        Shop All
      </Link>
      {listingItems.map((item) => (
        <Link
          key={item.slug}
          href={`/commerce/${item.slug}`}
          className={classNames(
            'text-md mt-2',
            { 'font-light text-[#FFFFFF75]': location.pathname !== `/commerce/${item.slug}` },
            { 'font-medium text-[#FFFFFF]': location.pathname === `/commerce/${item.slug}` }
          )}
        >
          {item.name}
        </Link>
      ))}
    </div>
  )
}

export default LeftSidebar
