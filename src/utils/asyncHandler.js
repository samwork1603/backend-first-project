const asyncHandler =(requestHandler) =>{
    (req,res,next) => {
        Promise.resolve().catch
    }
}

export {asyncHandler}

//########### High Order Func ##############

// const asyncHandler = () => {}
// const asyncHandler = (func) => () => {}
// const asyncHandler =(func) => async() => {}

//############# Another approach #########    

// const asyncHandler = (fn) => async (req,res,next) => {
//     try {
//         await fn(req,res,next)
//     } catch (error) {
//         res.status(err.code||500).json({
//             success:false,
//             message: err.message
//         })
//     }
// }    