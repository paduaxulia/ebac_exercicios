$(document).ready(function() {
    $('#carousel-imagens').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        pauseOnHover: false
    });

    $('.menu-hamburguer').click(function() {
        $('nav').slideToggle();
    });

    let lastScrollTop = 0;
    $(window).on('scroll', function() {
        let currentScroll = $(this).scrollTop();

        if (currentScroll > lastScrollTop) {
            $('nav').slideUp();
        }

        lastScrollTop = currentScroll;
    });
    
    $('#telefone').mask('(00) 00000-0000', {
        placeholder: 'DDD #####-####'
    });


    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            mensagem: {
                required: false,
            },
            interesse: {
                required: false
            }
        },
        messages: {
            nome: 'Por favor, insira seu nome'
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento,validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos.`)
            }
        }
    });

    const produtosSelecionados = {}
    
    $('.lista-produtos button').click(function() {
        const destino = $('#contato');
        const nomeProduto = $(this).parent().find('h3').text();
        const campoInteresse = $('#produto-interesse');

        if (produtosSelecionados[nomeProduto]) {
            produtosSelecionados[nomeProduto] += 1;
        } else {
            produtosSelecionados[nomeProduto] = 1;
        }

        let textoFinal = '';
        for (let produto in produtosSelecionados) {
            const quantidade = produtosSelecionados[produto];
            if (quantidade > 1) {
                textoFinal += `${quantidade}x ${produto}, `;
            } else {
                textoFinal += `${quantidade} ${produto}, `;
            }
        }

        textoFinal = textoFinal.slice(0, -2);

        campoInteresse.val(textoFinal);

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })
});