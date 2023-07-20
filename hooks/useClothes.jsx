import { useState } from "react";
export default function useClothes(){
    // clothes is the accessible variable, setClothes is how the variable is changed
    const [clothes, setClothes] = useState([
        {
            src: 'https://uk.bape.com/cdn/shop/products/001TEI251001_GRA_A.jpg?v=1662717072&width=2400'
        },
        {
            src: 'https://target.scene7.com/is/image/Target/GUEST_7b50daaa-36a2-4344-86af-09514a1c6af5?wid=325&hei=325&qlt=80&fmt=pjpeg'
        },
        {
            src: 'https://is4.revolveassets.com/images/p4/n/z/NIKR-MS3_V1.jpg'
        },
        {
            src: 'https://cdnimg.emmiol.com/E/202203/img_original-ECC0223TO-2504012364.jpg'
        },
        {
            src: 'https://images.stockx.com/images/Stussy-World-Tour-T-Shirt-White-Product.jpg?fit=fill&bg=FFFFFF&w=1200&h=857&fm=jpg&auto=compress&dpr=2&trim=color&updated_at=1688757278&q=75'
        },
    ])

    return{
        clothes
    }

}
