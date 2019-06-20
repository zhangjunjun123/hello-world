// 网站底部组件
<template>
    <div class='footer'><span class='footer-body'> {{copyright}} <BR/> {{author}} | {{icpCert}} </span></div>
</template>
<script>
    export default {
        name: "Footer", //导出组件名为Footer
        props: { //允许接收的参数及类型
            copyright: String,
            author: String,
            icpCert: String,
        }
    }
</script>
<style>
    .footer {
        line-height: 20px;
        background-color: #222d32;
        padding: 0;
        margin: 0;
    }

  .footer-body {
    font-size: 12px;
    line-height: 30px;
  }
</style>
