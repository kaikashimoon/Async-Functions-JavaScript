let stocks  = {
    fruits : ['strawberry', 'grapes', 'banana', 'apple'],
    liquid : ['water', 'ice'],
    holder : ['cone', 'cup', 'stick'],
    toppings : ['chocolate', 'peanuts'],
}


let isShopOpen = Boolean = false

// let order = () => {
    
//     return new Promise((resolve, reject)=>{
//         if (true) {
//             resolve()
//         } else {
//             reject()
//         }
//     })
// }

// order()
// .then()
// .then()
// .then()
// .catch()
// .finally()


async function order() {
    try {
        await abc
    } catch (error) {
        console.log('abcd doesnt exist')
    }
    finally{
        console.log('Runs code anyways')
    }
}

order()
.then(()=>{
    console.log('dfsd')
})