<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
    <title>Lista de produtos</title>
</head>

<body>


    <div style="margin: 2rem;">

        <table class="table table-striped">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Nome</th>
                    <th scope="col">Unidade medida</th>
                </tr>
            </thead>

            <tbody>
                <?php
                while ($produto = $produtos->fetch()) {
                    echo
                    '<tr>
                        <th scope="row">' . $produto["id"] . '</th>
                        <td>' . $produto["nome"] . '</td>
                        <td>' . $produto["um"] . '</td>
                    </tr>';
                }
                ?>
            </tbody>
        </table>
    </div>
</body>

</html>