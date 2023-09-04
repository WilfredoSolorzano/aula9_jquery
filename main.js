$(document).ready(function(){
    $("header button").click(function(){
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function(){
        $("form").slideUp();
    })

    $('form').on("submit", function(e){
        e.preventDefault();
        const enderecoNovaImagen= $("#endereco-imagin-nova").val();
        const novoItem= $(`<li style="display:none"></li>`);
        $(`<img src='${enderecoNovaImagen}'/>`).appendTo(novoItem);
        $(`<div class=overlay-imgem-link> 
            <a href=${enderecoNovaImagen} target="_blank" title= "ver imagen em tamanho real">
            Ver imagen em tamanho real
            </a>
        
        </div>`
        
        ).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000)
        $("#endereco-imagin-nova").val('');

    })
})