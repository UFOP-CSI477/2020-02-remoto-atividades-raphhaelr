@extends('home')

@section('conteudo')

<a href="{{route('vacinas.create')}}">Cadastrar</a>

<table class="table table-hover">
    <thead>
        <tr>
            <th scope="col">ID</th>
            <th scope="col">Nome</th>
            <th scope="col">Fabricante</th>
            <th scope="col">Doses</th>
            <th scope="col"></th>
        </tr>
    </thead>
    <tbody>
        @foreach($vacinas as $vacina)
        <tr>
            <td>{{$vacina->id}}</td>
            <td>{{$vacina->nome}}</td>
            <td>{{$vacina->fabricante}}</td>
            <td>{{$vacina->doses}}</td>
            <td>
                <a href="{{route('vacinas.show', $vacina->id)}}">Editar</a>
            </td>
        </tr>
        @endforeach
    </tbody>
</table>

@endsection
