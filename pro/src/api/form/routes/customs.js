module.exports = {

    routes:[
        {
            method:'POST',
            path:'/form-customs',
            handler:'forms.test',
            config:{
                auth:false
            }
        }
    ]
}