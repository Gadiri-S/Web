module.exports = {

    routes:[
        {
            method:'GET',
            path:'/solution/:slug',
            handler:'solution.findOne',
            config:{
                auth:false
            }
        }
    ]
}