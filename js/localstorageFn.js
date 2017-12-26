(function(w){
    var LocalstorageFn = function(obj){
        this.type = obj.type || obj;
        this.datas = obj.datas;
        this.state = 'fail';
    };
    LocalstorageFn.prototype.isNull = function () {
        if(this.datas){
            return false;
        }else{
            return true;
        }
    };
    LocalstorageFn.prototype.startStorage = function (callback) {
        var isnull = this.isNull();
        var _this = this;
        if(this.type == 'set'){
            if(isnull){
                throw '请定义要存入的数据';
            }else{
                if(typeof(this.datas) == "object"){
                    localStorage.setItem('datas',JSON.stringify(this.datas));
                    _this.state = 'success';
                }else if(typeof(this.datas) == 'string' || typeof(this.datas) == 'number'){
                    localStorage.setItem('datas',this.datas);
                    _this.state = 'success';
                }
                callback(this.state);
            };
        }else if(this.type == 'get'){
            var getInfo = JSON.parse(localStorage.getItem('datas'));
            if(getInfo){
                callback(getInfo);
            }else{
                throw '无可用数据,请存入';
            }
        }else if(this.type = 'clear'){
            callback(this.clearLocal());
        }else{
            throw 'type 类型不符';
        };
    };
    LocalstorageFn.prototype.clearLocal = function () {
        localStorage.clear();
        return '清除成功';
    };
    window.$storage = function (obj) {
        return new LocalstorageFn(obj);
    }
}(window));