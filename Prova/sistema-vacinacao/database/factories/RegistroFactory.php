<?php

namespace Database\Factories;

use App\Models\Registro;
use App\Models\Pessoa;
use App\Models\Unidade;
use App\Models\Vacina;
use Illuminate\Database\Eloquent\Factories\Factory;

class RegistroFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Registro::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $pessoas_ids = Pessoa::all('id');
        $unidades_ids = Unidade::all('id');
        $vacinas_ids = Vacina::all('id');

        return [
            'pessoa_id' => $this->faker->randomElement($pessoas_ids),
            'unidade_id' => $this->faker->randomElement($unidades_ids),
            'vacina_id' => $this->faker->randomElement($vacinas_ids),
            'dose' => $this->faker->numberBetween(1, 2),
            'data' => $this->faker->date('Y-m-d')
        ];
    }
}
