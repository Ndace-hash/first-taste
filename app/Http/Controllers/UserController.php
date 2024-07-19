<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Inertia\Inertia;

class UserController extends Controller
{
    public function show()
    {
        $user =['name'=>'zac'];
        return Inertia::render('User/Show', [
          'user' => $user
        ]);
    }
}
