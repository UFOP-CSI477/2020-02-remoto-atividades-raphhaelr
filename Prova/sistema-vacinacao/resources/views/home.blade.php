@extends('principal')

@section('conteudo')
<div style="margin-top: 2rem;" class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{ __('Área geral') }}</div>

                <h3 style="margin-left: 1rem;">Total geral vacinadas aplicadas:</h3>
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Aplicação</th>
                            <th scope="col">Quantidade</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Dose única</td>
                            <td>{{$dose_unica}}</td>
                        </tr>

                        <tr>
                            <td>Primeira dose</td>
                            <td>{{$primeira_dose}}</td>
                        </tr>

                        <tr>
                            <td>Segunda dose</td>
                            <td>{{$segunda_dose}}</td>
                        </tr>
                    </tbody>
                </table>

                <h3 style="margin-left: 1rem; margin-top: 2rem;">Total de aplicações por vacinas:</h3>
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Vacina</th>
                            <th scope="col">Quantidade</th>
                            <th scope="col">Porcentagem</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach($vacinas as $vacina)
                        <tr>
                            <td>{{$vacina->nome}}</td>
                            <td>{{$vacina->qtd}}</td>
                            <td>{{number_format(($vacina->qtd/$registros)*100, 2, ',')}}%</td>

                        </tr>

                        @endforeach
                        <tr>
                            <td>TOTAL GERAL</td>
                            <td>{{$registros}}</td>
                            <td>{{number_format(($registros/$registros)*100, 2, ',')}}%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
@endsection
