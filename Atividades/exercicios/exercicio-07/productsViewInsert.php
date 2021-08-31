<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
    <title>Cadastrar produto</title>
</head>

<body>

    <div style="margin: 2rem;">

        <h2>Cadastrar produto</h2>


        <form method="POST" action="productsControllerInsert.php" name="formData">
            <div>
                <label for="nome" class="form-label">Nome:</label>
                <input type="text" name="nome" id="nome" class="form-control" />
            </div>

            <div>
                <label for="um" class="form-label">Unidade de medida:</label>
                <input type="text" name="um" id="um" class="form-control" />
            </div>

            <div style="margin-top: 2rem;">
                <button type="submit" class="btn btn-primary">Cadastrar</button>
            </div>

        </form>

    </div>

</body>

</html>