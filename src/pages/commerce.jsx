import classNames from 'classnames'
import LeftSidebar from '../components/LeftSidebar'
import { Link, useRouteData } from '@solidjs/router'
import RightSidebar from '../components/RightSidebar'
import ProductPreview from '../components/ProductPreview'

const Commerce = ({}) => {
  const { products, leftSideBarItems } = useRouteData()
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="mb-5 flex w-full flex-row items-start px-5">
          {leftSideBarItems.loading && (
            <div className="hidden w-[15%] md:flex md:flex-col pt-5">
              {new Array(9).fill(0).map((_, index) => (
                <Link
                  key={index}
                  href={`/commerce`}
                  className={classNames('mt-2', 'text-md', 'px-10', 'animate-pulse bg-white/50', 'py-1.5', 'w-[10px]')}
                ></Link>
              ))}
            </div>
          )}
          {!leftSideBarItems.loading && (
            <div className="hidden w-[15%] pt-5 md:block">
              <LeftSidebar listingItems={leftSideBarItems()} />
            </div>
          )}
          {products.loading && (
            <div className="flex w-full flex-col items-start pt-5 md:w-[70%]">
              <h2 className="text-[#FFFFFF75]">Showing ... Results</h2>
              <div className="mt-5 flex flex-row flex-wrap items-start">
                {new Array(12)
                  .fill(0)
                  .map((_, _ind) => ({
                    name: '',
                    path: `/${_ind}`,
                    images: [{ url: 'https://via.placeholder.com/250x250' }],
                    prices: { price: { value: '', currencyCode: '' } },
                  }))
                  .map((i) => (
                    <ProductPreview key={i.path} loading={true} {...i} />
                  ))}
              </div>
            </div>
          )}
          {!products.loading && (
            <div className="flex w-full flex-col items-start pt-5 md:w-[70%]">
              <h2 className="text-[#FFFFFF75]">Showing {products().length} Results</h2>
              <div className="mt-5 flex flex-row flex-wrap gap-2">
                {products().map((i) => (
                  <ProductPreview key={i.path} {...i} />
                ))}
              </div>
            </div>
          )}
          <div className="hidden w-[15%] pt-5 md:block">
            <RightSidebar />
          </div>
        </div>
      </div>
    </>
  )
}

export default Commerce
