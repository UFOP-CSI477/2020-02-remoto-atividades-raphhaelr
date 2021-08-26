@extends('principal')

@section('conteudo')

<h1>Dados da unidade</h1>

<p>ID: {{$unidade->id}}</p>
<p>Nome: {{$unidade->nome}}</p>
<p>Bairro: {{$unidade->bairro}}</p>
<p>Cidade: {{$unidade->cidade}}</p>

<form name="frmDelete" action="{{route('unidades.destroy', $unidade->id)}}" method="POST" onsubmit="return confirm('Deseja apagar essa unidade?')">
    @csrf
    @method('delete')

    <input type="submit" class="btn btn-danger" value="Excluir"/>
</form>

@endsection
