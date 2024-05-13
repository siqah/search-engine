import { productsTable } from '@/db/schema'
import { db,  } from '@/db' // Import the PgTable type
import { redirect } from 'next/navigation'
import React from 'react'
import { sql } from 'drizzle-orm'

interface PageProps {
    searchParams: {
        [key: string]: string | string[] | undefined
    }
}

const Page = async ({searchParams} : PageProps) => {
     const query = searchParams.query

     if(Array.isArray(query) || !query) {
         return redirect('/')
     }
   let products =  await db.select()
   .from(productsTable)
   .where(
     sql`to_tsvector('simple', lower(${productsTable.name} || ' ' || ${
       productsTable.description
     })) @@ to_tsquery('simple', lower(${query
       .trim()
       .split(' ')
       .join(' & ')}))`
   )
   
    .limit(3)

  return <pre>{JSON.stringify(products)}</pre>
}

export default Page