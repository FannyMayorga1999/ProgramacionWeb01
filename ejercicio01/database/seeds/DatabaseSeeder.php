<?php

use Illuminate\Database\Seeder;
use App\Product;
use App\Category;
use Illuminate\Database\Factory;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        factory(App\Product::class,10)->create();
        factory(App\Provider::class,10)->create();
    }
}
