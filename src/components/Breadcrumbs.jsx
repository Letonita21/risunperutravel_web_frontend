import React from 'react'
import { HomeIcon } from '@/icons'

const Breadcrumbs = ({ data = [] }) => {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex items-center gap-2 text-sm font-semibold text-gray-700">
        <li className="flex items-center">
          <HomeIcon color="#000000" />
        </li>

        {data.map((ob, index) => (
          <li key={index} className="flex items-center">
            <span className="mx-1 text-gray-400">/</span>
            <span className="transition-colors hover:text-gray-900">
              {ob}
            </span>
          </li>
        ))}
      </ol>
    </nav>
  )
}

export default Breadcrumbs