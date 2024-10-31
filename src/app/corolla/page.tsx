import Link from "next/link"
export default function Corolla(){
    return(
        <div>
            <div className="text-center">

                <div className="text-black text-5xl font-bold  py-2">TOYOTA COROLLA X 2025</div>
                <div className="flex justify-center items-center py-10 px-10">
                    <img src="./corolla.jpg" alt="Corolla car" width="420"  className="border-black " />
                </div>
                <div>

                    <span className="py-5 px-5">This is Toyota Corolla X car 2025. Got the Looks, Got the Moves! The state-of-the-art Corolla  Altis X Dual VVT-i  engine with Acoustic Control <br /> Induction System  
                    (ACIS) is designed to maximize  performance,  power, durability  and user experience. <br />  The engine in Altis X Grande provides you an exhilarating 138 HP and 173 Nm of torque. </span>
                </div>
                <div className=" text-3xl text-green-400 font-semibold py-2 px-2 ">
                    <span>
                        PKR 75,23,000
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