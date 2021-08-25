@extends('home')

@section('conteudo')

<table class="table table-hover">
    <thead>
        <tr>
            <th scope="col">ID</th>
            <th scope="col">Nome</th>
            <th scope="col">Bairro</th>
            <th scope="col">Cidade</th>
            <th scope="col"></th>
        </tr>
    </thead>
    <tbody>
        @foreach($unidades as $unidade)
        <tr>
            <td>{{$unidade->id}}</td>
            <td>{{$unidade->nome}}</td>
            <td>{{$unidade->bairro}}</td>
            <td>{{$unidade->cidade}}</td>
            <td>
                <a href="{{route('unidades.show', $unidade->id)}}">Exibir</a>
            </td>
        </tr>
        @endforeach
    </tbody>
</table>

@endsection
