// 注意，每次调用请求接口的时候会先调用ajaxPrefilter 这个函数
// 在这个函数中，可以拿到我们给Ajax提供的配置对象
$.ajaxPrefilter(function(options) {
    // 同意拼接的跟路径
    options.url = 'http://ajax.frontend.itheima.net' + options.url;
    console.log(options.url);
})