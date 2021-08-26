<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Vacinação COVID-19 2021</title>
</head>

<body>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="{{route('home')}}">VACINAÇÃO COVID-19</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#conteudoNavbarSuportado" aria-controls="conteudoNavbarSuportado" aria-expanded="false" aria-label="Alterna navegação">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="conteudoNavbarSuportado">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="{{route('vacinas.index')}}">Área geral</a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link" href="{{route('vacinas.index')}}">Vacinas</a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link" href="{{route('pessoas.index')}}">Pessoas</a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link" href="{{route('unidades.index')}}">Unidades</a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link" href="{{route('registros.index')}}">Registros</a>
                </li>
            </ul>
        </div>

        <div>
            <a style="margin-right: 2rem;" href="/login">Login</a>
        </div>
    </nav>

    @if(session('mensagem'))
    <div class="alert alert-success">
        {{session('mensagem')}}
    </div>
    @endif

    @yield('conteudo')
</body>

</html>
