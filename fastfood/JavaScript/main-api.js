let menuPizza = async (url) => {
    let showMenuPizza = ""
    let rec = await fetch(url)
    let data = await rec.json()

    data.forEach((element) => {
        showMenuPizza += `
       <div dir="rtl" class="w-[90%] max-[570px]: mr-10 ml-10 flex justify-center">
                    <div class="max-[570px]:justify-center bg-[#242a38] mb-5 rounded-[25px] w-[100%] flex flex-col justify-center  border-y border-yellow-300 min-[570px]:flex-row ">
                        <div class="mt-4 mr-4 w-[250px]">
                            <img class="h-[150px] rounded-[20px] " src="${element.img}" alt="">
                              <p class="max-[570px]:hidden text-black text-[16px] text-center bg-yellow-300 p-[12px] rounded-[10px]  w-20 my-8 mt-8 mr-6">سفارش</p>
                        </div>
                        <div style="margin-right:40px" class="mt-8 ml-5 ">
                            <div class="w-[250px]" >
                                <p style="padding: 15px; width:50%; " class="text-white bg-red-500 w-[40%] rounded-[20px] text-[16px] text-center " >${element.title}</p>
                                <div class="mt-4">
                                   <span class="text-yellow-300 text-[18px]">${element.price}</span>
                                   <span class="mr-4 text-yellow-300 text-[18px]">تومان</span>
                                </div> 
                                <p class="text-white text-[16px] mt-6" >${element.info}</p>
                                <p class="min-[570px]:hidden text-black text-[16px] text-center bg-yellow-300 p-[12px] rounded-[10px]  w-20 my-8 mt-8 mr-6">سفارش</p>
                            </div>
                        </div>
                    </div>
                </div>
        `
    })
    document.getElementById("root").innerHTML = showMenuPizza
}
document.addEventListener("DOMContentLoaded", () => menuPizza("http://localhost:3000/pizza"))

document.getElementById("pizza").addEventListener("click", ()=>{
    menuPizza("http://localhost:3000/pizza")
})
document.getElementById("sun").addEventListener("click",()=>{
menuPizza("http://localhost:3000/sundcich")
})