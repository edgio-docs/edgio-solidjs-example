import { Link } from '@solidjs/router'
import { Icon } from 'solid-heroicons'
import { relativizeURL } from '../lib/helper'
import { heart } from 'solid-heroicons/outline'

const ProductPreview = ({ name, path, images, prices }) => {
  const nonSlashPath = path.replace(/\//g, '')
  return (
    <Link className="w-[250px] h-[250px] relative mt-2 border border-white p-1" href={`/product/${nonSlashPath}`}>
      <div className="absolute top-0 left-0 z-10 flex flex-col items-start">
        <h3 className="bg-white py-2 px-4 text-xl font-medium text-black">{name}</h3>
        <h4 className="text-md bg-white py-2 px-4 text-black">{`${prices.price.value}${prices.price.currencyCode}`}</h4>
      </div>
      <Icon path={heart} className="absolute top-0 right-0 h-[30px] w-[30px] bg-white p-2" />
      <img className="h-full object-cover" loading="lazy" width={1200} height={1200} src={relativizeURL(images[0].url)} />
    </Link>
  )
}

export default ProductPreview
