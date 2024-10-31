import Link from "next/link"
export default function Swift (){

    return (

<div>


<div className="text-center">

<div className="text-black text-5xl font-bold py-2">Honda Swift-2024</div>
<div className=" flex justify-center items-center py-10 px-10">
    <img src="./swift.jpg" alt="Swift"width="420" />

</div>

<div>

    <span className="py-5 px-">The price of Suzuki Swift 2024 in Pakistan ranges from PKR 4,336,000 for the base variant GL Manual <br /> to PKR 4,719,000 for the top of the line GLX CVT variant. These prices of Suzuki Swift in Pakistan are ex-factory.</span>

</div>

<div className=" text-3xl text-green-400 font-semibold py-2 px-2 "> 
                    <span>
                        PKR 4,5,0,000
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