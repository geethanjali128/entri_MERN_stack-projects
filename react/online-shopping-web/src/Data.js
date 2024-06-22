import React from 'react'
import laptop from './routes/images/laptop.jpg'
import buds from './routes/images/buds.jpg' 
import printer from './routes/images/printer.jpg'
import tv from './routes/images/tv.jpg'
import mobile from './routes/images/mobile.jpg'
import headset from './routes/images/headset.jpg'


    const data={
      productItems:[
        {
            id:1,
            name:"laptop",
            price:60000,
            img:laptop
        },
         {
            id:2,
            name:"bluetooth buds",
            price:2000,
            img:buds
        },
         {
            id:3,
            name:"mobile",
            price:25000,
            img:mobile
        },
         {
            id:4,
            name:"headset",
            price:2000,
            img:headset
        },
         {
            id:5,
            name:"TV",
            price:40000,
            img:tv
        },
         {
            id:6,
            name:"printer",
            price:10000,
            img:printer
        }
      ]
    }
   

export default data;


