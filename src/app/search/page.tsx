import { redirect } from 'next/navigation'
import React from 'react'


interface PageProps {
    searchParams: {
        [key: string]: string | string[] | undefined
    }
}

const Page = ({searchParams} : PageProps) => {
     const query = searchParams.query

     if(Array.isArray(query) || !query) {
         return redirect('/')
     }

    //  querying logic

  return (
    <div>hello</div>
  )
}

export default Page