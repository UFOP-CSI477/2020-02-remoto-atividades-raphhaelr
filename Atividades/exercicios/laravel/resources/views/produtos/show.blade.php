@extends('welcome')


@section('conteudo')



<h1>Dados do produto</h1>

<p>ID: {{$produto->id}}</p>
<p>Pessoa: {{$produto->nome}}</p>
<p>Unidade: {{$produto->um}}</p>


<a href="{{route('produtos.index')}}">Voltar</a>
@endsection()

