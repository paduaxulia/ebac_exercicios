$(document).ready(function() {
    $('form').submit(function(e) {
        e.preventDefault();
        
        const taskText = $('#nova-tarefa').val().trim();
        if (taskText !== '') {
            $('#lista').append(`<li>${taskText}</li>`);
            $('#nova-tarefa').val('');
        }
    });

    $('#lista').on('click', 'li', function() {
        $(this).toggleClass('completed');
    })
});

