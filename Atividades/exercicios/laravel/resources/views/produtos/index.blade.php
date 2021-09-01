@extends('welcome')


@section('conteudo')
<table class="table table-striped">
    <thead>
        <tr>
            <th scope="col">ID</th>
            <th scope="col">Nome</th>
            <th scope="col">Unidade medida</th>
            <th scope="col"></th>
        </tr>
    </thead>

    <tbody>
        @foreach($produtos as $produto)
        <tr>
            <td>{{$produto->id}}</td>
            <td>{{$produto->nome}}</td>
            <td>{{$produto->um}}</td>
            <td>
                <a href="{{route('produtos.show', $produto->id)}}">Exibir</a>
            </td>
        </tr>
        @endforeach
    </tbody>
</table>

@endsection()
