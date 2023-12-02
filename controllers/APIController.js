import {
    readListBook,
    createUser,
    changePassWordUser,
    checkLogIn,
    readListBooksByLng,
    readListBooksByCategory,
    readListBooksBySearch,
    createOrder,
    createOrderItem
} from '../services/CRUDservice.js'

export const getBooks = async (req,res) => {
    try {
    let results = await readListBook()
    console.log('a', results)
    return res.status(200).json({
        massege: 'ok',
        data: results
    })
} catch (error) {
    res.status(409).json({ message: error.message });
}
}

export const postUser = async (req, res) => {
    name = req.body.name
    email = req.body.email
    pass = req.body.pass
    address = req.body.address
    if(!email ||!name ||!pass||!address){
        return res.status(200).json({
            message: 'oh NOOOOOO'
        })
    }
    createUser(name, email, pass, address)
    return res.status(200).json({
        message: 'ok men'
    })
}

export const putPassWordUser = async (req,res) => {
    let id = req.body.id
    let pass = req.body.pass
    if(!id ||!pass){
        return res.status(200).json({
            message: 'oh NOOOOOO'
        })
    }
    await changePassWordUser(id,pass)
    return res.status(200).json({
        message: 'ok men'
    })
}

export const getUser = async (req,res) => {
    let email = req.body.email
    let pass = req.body.pass
    if(!email ||!pass){
        return res.status(200).json({
            message: 'oh NOOOOOO'
        })
    }
    let results = await checkLogIn(email, pass)
    return res.status(200).json({
        massege: 'ok',
        data: results[0]
    })
}

export const getBooksByLng = async (req, res) => {
    if(!req.body.lng){
        return res.status(200).json({
            message: 'oh NOOOOOO'
        })
    }
    let results = await readListBooksByLng(req.body.lng)
    return res.status(200).json({
        massege: 'ok',
        data: results
    })
}

export const getBooksByCategory = async (req,res) => {
    if(!req.body.category){
        return res.status(200).json({
            message: 'oh NOOOOOO'
        })
    }
    let results = await readListBooksByCategory(req.body.category)
    return res.status(200).json({
        massege: 'ok',
        data: results
    })
}

export const getBooksBySearch = async (req,res) => {
    if(!req.body.key){
        return res.status(200).json({
            message: 'oh NOOOOOO'
        })
    }
    let results = await readListBooksBySearch(req.body.key)
    return res.status(200).json({
        massege: 'ok',
        data: results
    })
}

export const postOrder = async (req,res) =>{
    let user_id = req.body.user_id
    let order_date = req.body.order_date
    if(!user_id||!order_date){
        return res.status(200).json({
            message: 'oh NOOOOOO'
        })
    }
    await createOrder(user_id,order_date)
    return res.status(200).json({
        massege: 'ok',
    })
}

export const postOrderItem = async (req, res) => {
    let order_id = req.body.order_id
    let book_id = req.body.book_id
    let quantity = req.body.quantity
    if(!order_id||!book_id||!quantity){
        return res.status(200).json({
            message: 'oh NOOOOOO'
        })
    }
    await createOrderItem(order_id,book_id,quantity)
    return res.status(200).json({
        message: 'ok'
    })
}
