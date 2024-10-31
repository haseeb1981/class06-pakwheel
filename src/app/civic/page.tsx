import Link from "next/link"
export default function Civic (){
    return (

<div>

    <div className=" text-center">
        <div className=" text-black text-5xl font-bold py-2"> Honda Civic</div>
        <div className="flex justify-center items-center py-10 px-10">
            <img src="./honda.jpg" alt="Honda Civic" width="420"className="border-black"   />


        </div>

        <div>

            <span className="py-5 px-5">The price of Honda Civic 2024 in Pakistan ranges from PKR 8,659,000 for the base variant Oriel to <br /> PKR 9,899,000 for the top of the line RS variant. These prices of Honda Civic in Pakistan are ex-factory.</span>

        </div>

        <div className=" text-3xl text-green-400 font-semi-bold py-2 px-2">

<span>


PKR 9,890,000

</span>

</div>

<button className="bg-blue-400 text-black rounded-3xl py-2 px-2">
<Link href="/payment">
 MAKE PAYMENT
</Link>
</button>

</div>

    </div>












    )
}