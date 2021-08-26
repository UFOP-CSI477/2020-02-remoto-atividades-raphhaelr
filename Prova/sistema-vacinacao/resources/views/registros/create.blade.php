@extends('principal')

@section('conteudo')


<script src="getVacina.js"></script>
<form action="{{route('registros.store')}}" method="POST">
    @csrf
    <div class="form-group">
        <label for="inputPessoa">Pessoa:</label>

        <select id="pessoa_id" required="" name="pessoa_id" class="form-control">
            <option value="">Selecione a pessoa</option>
            @foreach($pessoas as $pessoa)
                <option value="{{$pessoa->id}}">{{$pessoa->nome}}</option>
            @endforeach
        </select>
    </div>
    <div class="form-group">
        <label for="inputUnidade">Unidade:</label>
        <select id="unidade_id" required="" name="unidade_id" class="form-control">
            <option value="">Selecione a unidade</option>
            @foreach($unidades as $unidade)
                <option value="{{$unidade->id}}">{{$unidade->nome}}</option>
            @endforeach
        </select>
    </div>

    <div class="form-group">
        <label for="inputVacina">Vacina:</label>
        <select id="vacina_id" required="" name="vacina_id" class="form-control" onchange="getVacina()">
            <option value="">Selecione a vacina</option>
            @foreach($vacinas as $vacina)
                <option value="{{$vacina->id}}">{{$vacina->nome}}</option>
            @endforeach
        </select>
    </div>

    <div class="form-group">
        <label for="inputDose">Dose:</label>
        <input type="text" name="dose" class="form-control" id="inputDose" placeholder="Digite a dose" required>
    </div>

    <div class="form-group">
        <label for="inputData">Data:</label>
        <input type="date" class="form-control" name="data" id="inputData" placeholder="Digite a data" required>
    </div>
    <button type="submit" class="btn btn-primary">Enviar</button>
</form>

@endsection
