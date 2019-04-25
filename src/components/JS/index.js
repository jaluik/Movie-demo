import Vue from 'vue';
import MessageBox from './MessageBox';

export var messageBox = (function(){
    var defaults = { //默认参数
        title: '',
        content: '',
        cancel: '',
        ok: '',
        handleCancle: '',
        handleOk: '',
    };

    return function(opts){ //配置参数
        for(var attr in opts){
            defaults[attr] = opts[attr]
        }
        var Mycomponent = Vue.extend(MessageBox);
        var vm = new Mycomponent({
            el: document.createElement('div'),
            data:{
                title: defaults.title,
                content: defaults.content,
                cancel: defaults.cancel,
                ok: defaults.ok,
            },
            methods: {
                handleCancle(){
                    defaults.handleCancle && defaults.handleCancle.call(this);
                    document.body.removeChild(vm.$el)
    
                },
                handleOk(){
                    defaults.handleOk && defaults.handleOk.call(this);
                    document.body.removeChild(vm.$el)
                },
                
            }
        });
        document.body.appendChild(vm.$el)
    }


})();