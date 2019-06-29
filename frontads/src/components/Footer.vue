<template>
  
    <div id="footer">
        <div class="container">
            <ul class="footer-navbar">
                
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms &amp; Conditions</a></li>
            </ul>
            <div class="copy-text">
                EroCiti Group. &copy; {{ano}} | Todos os direitos reservados. </div>
        </div>
    </div>



</template>

<script>
// @ is an alias to /src


export default {
  name: 'Footer',
  computed:{
            ano: function(){
                var dt = new Date()
                 return dt.getFullYear()
            }  
        },
  components: {
    
  }
}
</script>
