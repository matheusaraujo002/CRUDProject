(function(){
    $('#clientes').on('click', '.js-delete', function(){
        let botaoClicado = $(this) //recuperar o botão
        $('#btnExcluir').attr('data-id', botaoClicado.attr('data-id'))
        $('#confirmModal').modal('show')
    })

    $('#btnExcluir').on('click', function(){
        let botaoExcluir = $(this)
        let codCliente = botaoExcluir.attr('data-id')
        $.ajax({
            url: '/clientes/delete/' + codCliente, 
            method: 'GET',
            success: function(){
                window.location.href = '/clientes'
            }
        })
    })
})()